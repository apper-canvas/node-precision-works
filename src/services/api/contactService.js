import { getApperClient } from '@/services/apperClient';
import { toast } from 'react-toastify';

export const contactService = {
  async submitInquiry(inquiryData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          inquiry_type_c: inquiryData.inquiryType,
          company_name_c: inquiryData.companyName,
          contact_name_c: inquiryData.contactName,
          email_c: inquiryData.email,
          phone_c: inquiryData.phone,
          message_c: inquiryData.message,
          attachments_c: inquiryData.attachments?.map(file => file.name).join(', ') || '',
          timestamp_c: new Date().toISOString()
        }]
      };

      const response = await apperClient.createRecord('inquiry_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to create ${failed.length} inquiries:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error?.response?.data?.message || error);
      toast.error('Failed to submit inquiry. Please try again.');
      return null;
    }
  },

  async getAll() {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "inquiry_type_c" }},
          { field: { Name: "company_name_c" }},
          { field: { Name: "contact_name_c" }},
          { field: { Name: "email_c" }},
          { field: { Name: "phone_c" }},
          { field: { Name: "message_c" }},
          { field: { Name: "timestamp_c" }}
        ]
      };

      const response = await apperClient.fetchRecords('inquiry_c', params);
      
      if (!response?.data?.length) {
        return [];
      }
      
      return response.data;
    } catch (error) {
      console.error("Error fetching inquiries:", error?.response?.data?.message || error);
      return [];
    }
  },

  async getById(id) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "inquiry_type_c" }},
          { field: { Name: "company_name_c" }},
          { field: { Name: "contact_name_c" }},
          { field: { Name: "email_c" }},
          { field: { Name: "phone_c" }},
          { field: { Name: "message_c" }},
          { field: { Name: "timestamp_c" }}
        ]
      };

      const response = await apperClient.getRecordById('inquiry_c', parseInt(id), params);
      
      if (!response?.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching inquiry ${id}:`, error?.response?.data?.message || error);
      return null;
    }
  }
};