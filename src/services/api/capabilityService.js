import { getApperClient } from '@/services/apperClient';
import { toast } from 'react-toastify';

export const capabilityService = {
  async getAll() {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "name_c" }},
          { field: { Name: "description_c" }},
          { field: { Name: "capacity_c" }},
          { field: { Name: "tolerances_c" }}
        ]
      };

      const response = await apperClient.fetchRecords('capability_c', params);
      
      if (!response?.data?.length) {
        return [];
      }
      
      return response.data;
    } catch (error) {
      console.error("Error fetching capabilities:", error?.response?.data?.message || error);
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
          { field: { Name: "description_c" }},
          { field: { Name: "capacity_c" }},
          { field: { Name: "tolerances_c" }}
        ]
      };

      const response = await apperClient.getRecordById('capability_c', parseInt(id), params);
      
      if (!response?.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching capability ${id}:`, error?.response?.data?.message || error);
      return null;
    }
  },

  async create(capabilityData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          name_c: capabilityData.name,
          description_c: capabilityData.description,
          capacity_c: capabilityData.capacity,
          tolerances_c: typeof capabilityData.tolerances === 'object' 
            ? JSON.stringify(capabilityData.tolerances) 
            : capabilityData.tolerances
        }]
      };

      const response = await apperClient.createRecord('capability_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to create ${failed.length} capabilities:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error creating capability:", error?.response?.data?.message || error);
      return null;
    }
  },

  async update(id, capabilityData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          Id: parseInt(id),
          name_c: capabilityData.name,
          description_c: capabilityData.description,
          capacity_c: capabilityData.capacity,
          tolerances_c: typeof capabilityData.tolerances === 'object' 
            ? JSON.stringify(capabilityData.tolerances) 
            : capabilityData.tolerances
        }]
      };

      const response = await apperClient.updateRecord('capability_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to update ${failed.length} capabilities:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error updating capability:", error?.response?.data?.message || error);
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

      const response = await apperClient.deleteRecord('capability_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return false;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to delete ${failed.length} capabilities:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0;
      }
    } catch (error) {
      console.error("Error deleting capability:", error?.response?.data?.message || error);
      return false;
    }
  }
};