import { getApperClient } from "@/services/apperClient";
import { toast } from "react-toastify";
import React from "react";
import Error from "@/components/ui/Error";

export const productService = {
  async getAll() {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "name_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "description_c" }},
          { field: { Name: "specifications_c" }},
          { field: { Name: "materials_c" }},
          { field: { Name: "lead_time_c" }},
          { field: { Name: "technical_drawing_c" }}
        ]
      };

      const response = await apperClient.fetchRecords('product_c', params);
      
      if (!response?.data?.length) {
        return [];
      }
      else {
        console.error("Error fetching products:", response?.message);
      }
      
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error?.response?.data?.message || error);
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
          { field: { Name: "category_c" }},
          { field: { Name: "description_c" }},
          { field: { Name: "specifications_c" }},
          { field: { Name: "materials_c" }},
          { field: { Name: "lead_time_c" }},
          { field: { Name: "technical_drawing_c" }}
        ]
      };

      const response = await apperClient.getRecordById('product_c', parseInt(id), params);
      
      if (!response?.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error?.response?.data?.message || error);
      return null;
    }
  },

  async getByCategory(category) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "name_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "description_c" }},
          { field: { Name: "specifications_c" }},
          { field: { Name: "materials_c" }},
          { field: { Name: "lead_time_c" }},
          { field: { Name: "technical_drawing_c" }}
        ],
        where: [{
          FieldName: "category_c",
          Operator: "ExactMatch",
          Values: [category]
        }]
      };

      const response = await apperClient.fetchRecords('product_c', params);
      
      return response.data || [];
    } catch (error) {
      console.error("Error fetching products by category:", error?.response?.data?.message || error);
      return [];
    }
  },

  async getCategories() {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "category_c" }}
        ],
        groupBy: ["category_c"]
      };

      const response = await apperClient.fetchRecords('product_c', params);
      
      if (!response?.data?.length) {
        return [];
      }
      
      return [...new Set(response.data.map(p => p.category_c))];
    } catch (error) {
      console.error("Error fetching product categories:", error?.response?.data?.message || error);
      return [];
    }
  },

  async create(productData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          name_c: productData.name,
          category_c: productData.category,
          description_c: productData.description,
          specifications_c: typeof productData.specifications === 'object' 
            ? JSON.stringify(productData.specifications) 
            : productData.specifications,
          materials_c: Array.isArray(productData.materials) 
            ? productData.materials.join(', ') 
            : productData.materials,
          lead_time_c: productData.leadTime,
          technical_drawing_c: productData.technicalDrawing
        }]
      };

      const response = await apperClient.createRecord('product_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to create ${failed.length} products:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error creating product:", error?.response?.data?.message || error);
      return null;
    }
  },

  async update(id, productData) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        records: [{
          Id: parseInt(id),
          name_c: productData.name,
          category_c: productData.category,
          description_c: productData.description,
          specifications_c: typeof productData.specifications === 'object' 
            ? JSON.stringify(productData.specifications) 
            : productData.specifications,
          materials_c: Array.isArray(productData.materials) 
            ? productData.materials.join(', ') 
            : productData.materials,
          lead_time_c: productData.leadTime,
          technical_drawing_c: productData.technicalDrawing
        }]
      };

      const response = await apperClient.updateRecord('product_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return null;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to update ${failed.length} products:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            record.errors?.forEach(error => toast.error(`${error.fieldLabel}: ${error}`));
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0 ? successful[0].data : null;
      }
    } catch (error) {
      console.error("Error updating product:", error?.response?.data?.message || error);
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

      const response = await apperClient.deleteRecord('product_c', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return false;
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);
        
        if (failed.length > 0) {
          console.error(`Failed to delete ${failed.length} products:${failed.map(f => f.message).join(', ')}`);
          failed.forEach(record => {
            if (record.message) toast.error(record.message);
          });
        }
        
        return successful.length > 0;
      }
    } catch (error) {
      console.error("Error deleting product:", error?.response?.data?.message || error);
      return false;
    }
}
};