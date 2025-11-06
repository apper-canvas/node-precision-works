import { getApperClient } from '@/services/apperClient';
import { toast } from 'react-toastify';

export const certificationService = {
  async getAll() {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "name_c" }},
          { field: { Name: "issuing_body_c" }},
          { field: { Name: "number_c" }},
          { field: { Name: "valid_until_c" }},
          { field: { Name: "logo_c" }}
        ]
      };

      const response = await apperClient.fetchRecords('certification_c', params);
      
      if (!response?.data?.length) {
        return [];
      }
      
      return response.data;
    } catch (error) {
      console.error("Error fetching certifications:", error?.response?.data?.message || error);
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
          { field: { Name: "name_c" }},
          { field: { Name: "issuing_body_c" }},
          { field: { Name: "number_c" }},
          { field: { Name: "valid_until_c" }},
          { field: { Name: "logo_c" }}
        ]
      };

      const response = await apperClient.getRecordById('certification_c', parseInt(id), params);
      
      if (!response?.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching certification ${id}:`, error?.response?.data?.message || error);
      return null;
    }
  },

  async create(certificationData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          name_c: certificationData.name,
          issuing_body_c: certificationData.issuingBody,
          number_c: certificationData.number,
          valid_until_c: certificationData.validUntil,
          logo_c: certificationData.logo
        }]
      };

      const response = await apperClient.createRecord('certification_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to create ${failed.length} certifications:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error creating certification:", error?.response?.data?.message || error);
      return null;
    }
  },

  async update(id, certificationData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          Id: parseInt(id),
          name_c: certificationData.name,
          issuing_body_c: certificationData.issuingBody,
          number_c: certificationData.number,
          valid_until_c: certificationData.validUntil,
          logo_c: certificationData.logo
        }]
      };

      const response = await apperClient.updateRecord('certification_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to update ${failed.length} certifications:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error updating certification:", error?.response?.data?.message || error);
      return null;
    }
  },

  async delete(id) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = { 
        RecordIds: [parseInt(id)]
      };

      const response = await apperClient.deleteRecord('certification_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return false;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to delete ${failed.length} certifications:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0;
      }
    } catch (error) {
      console.error("Error deleting certification:", error?.response?.data?.message || error);
      return false;
    }
  }
};