import { getApperClient } from '@/services/apperClient';

export const blogService = {
  /**
   * Get all blog posts with optional filtering
   */
  async getAll(filters = {}) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "title_c" }},
          { field: { Name: "content_c" }},
          { field: { Name: "excerpt_c" }},
          { field: { Name: "author_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "featured_c" }},
          { field: { Name: "published_at_c" }},
          { field: { Name: "read_time_c" }},
          { field: { Name: "tags_c" }}
        ],
        orderBy: [{
          fieldName: "published_at_c",
          sorttype: "DESC"
        }]
      };

      // Apply filters if provided
      if (filters.search || filters.category) {
        params.whereGroups = [{
          operator: "OR",
          subGroups: []
        }];

        if (filters.search) {
          const searchConditions = {
            conditions: [
              {
                fieldName: "title_c",
                operator: "Contains",
                values: [filters.search]
              },
              {
                fieldName: "excerpt_c", 
                operator: "Contains",
                values: [filters.search]
              },
              {
                fieldName: "content_c",
                operator: "Contains", 
                values: [filters.search]
              }
            ],
            operator: "OR"
          };
          params.whereGroups[0].subGroups.push(searchConditions);
        }

        if (filters.category && filters.category !== 'all') {
          const categoryConditions = {
            conditions: [{
              fieldName: "category_c",
              operator: "ExactMatch",
              values: [filters.category]
            }],
            operator: "OR"
          };
          params.whereGroups[0].subGroups.push(categoryConditions);
        }
      }

      const response = await apperClient.fetchRecords('blog_c', params);
      
      if (!response?.data) {
        return {
          success: true,
          data: []
        };
      }

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error("Error fetching blog posts:", error?.response?.data?.message || error);
      return {
        success: false,
        error: 'Failed to fetch blog posts'
      };
    }
  },

  /**
   * Get a single blog post by ID
   */
  async getById(id) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "title_c" }},
          { field: { Name: "content_c" }},
          { field: { Name: "excerpt_c" }},
          { field: { Name: "author_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "featured_c" }},
          { field: { Name: "published_at_c" }},
          { field: { Name: "read_time_c" }},
          { field: { Name: "tags_c" }}
        ]
      };

      const response = await apperClient.getRecordById('blog_c', parseInt(id), params);
      
      if (!response?.data) {
        return {
          success: false,
          error: 'Blog post not found'
        };
      }

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Error fetching blog post ${id}:`, error?.response?.data?.message || error);
      return {
        success: false,
        error: 'Failed to fetch blog post'
      };
    }
  },

  /**
   * Get blog posts by category
   */
  async getByCategory(category) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "title_c" }},
          { field: { Name: "content_c" }},
          { field: { Name: "excerpt_c" }},
          { field: { Name: "author_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "featured_c" }},
          { field: { Name: "published_at_c" }},
          { field: { Name: "read_time_c" }},
          { field: { Name: "tags_c" }}
        ],
        where: [{
          FieldName: "category_c",
          Operator: "ExactMatch",
          Values: [category]
        }],
        orderBy: [{
          fieldName: "published_at_c",
          sorttype: "DESC"
        }]
      };

      const response = await apperClient.fetchRecords('blog_c', params);
      
      return {
        success: true,
        data: response.data || []
      };
    } catch (error) {
      console.error("Error fetching blog posts by category:", error?.response?.data?.message || error);
      return {
        success: false,
        error: 'Failed to fetch blog posts by category'
      };
    }
  },

  /**
   * Get featured blog posts
   */
  async getFeatured() {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "title_c" }},
          { field: { Name: "content_c" }},
          { field: { Name: "excerpt_c" }},
          { field: { Name: "author_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "featured_c" }},
          { field: { Name: "published_at_c" }},
          { field: { Name: "read_time_c" }},
          { field: { Name: "tags_c" }}
        ],
        where: [{
          FieldName: "featured_c",
          Operator: "ExactMatch",
          Values: [true]
        }],
        orderBy: [{
          fieldName: "published_at_c",
          sorttype: "DESC"
        }],
        pagingInfo: {
          limit: 3,
          offset: 0
        }
      };

      const response = await apperClient.fetchRecords('blog_c', params);
      
      return {
        success: true,
        data: response.data || []
      };
    } catch (error) {
      console.error("Error fetching featured blog posts:", error?.response?.data?.message || error);
      return {
        success: false,
        error: 'Failed to fetch featured blog posts'
      };
    }
  },

  /**
   * Get recent blog posts
   */
  async getRecent(limit = 5) {
    try {
      const apperClient = getApperClient();
      if (!apperClient) {
        throw new Error('ApperClient not initialized');
      }

      const params = {
        fields: [
          { field: { Name: "title_c" }},
          { field: { Name: "content_c" }},
          { field: { Name: "excerpt_c" }},
          { field: { Name: "author_c" }},
          { field: { Name: "category_c" }},
          { field: { Name: "featured_c" }},
          { field: { Name: "published_at_c" }},
          { field: { Name: "read_time_c" }},
          { field: { Name: "tags_c" }}
        ],
        orderBy: [{
          fieldName: "published_at_c",
          sorttype: "DESC"
        }],
        pagingInfo: {
          limit: limit,
          offset: 0
        }
      };

      const response = await apperClient.fetchRecords('blog_c', params);
      
      return {
        success: true,
        data: response.data || []
      };
    } catch (error) {
      console.error("Error fetching recent blog posts:", error?.response?.data?.message || error);
      return {
        success: false,
        error: 'Failed to fetch recent blog posts'
      };
    }
  }
};