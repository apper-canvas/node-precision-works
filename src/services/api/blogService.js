import mockBlogs from '@/services/mockData/blogs.json';

// Mock service for blog operations
// Will be replaced with database integration when tables become available
let blogsData = [...mockBlogs];

export const blogService = {
  /**
   * Get all blog posts with optional filtering
   */
  async getAll(filters = {}) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    try {
      let filteredBlogs = [...blogsData];
      
      // Apply search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredBlogs = filteredBlogs.filter(blog => 
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.excerpt.toLowerCase().includes(searchTerm) ||
          blog.content.toLowerCase().includes(searchTerm)
        );
      }
      
      // Apply category filter
      if (filters.category && filters.category !== 'all') {
        filteredBlogs = filteredBlogs.filter(blog => blog.category === filters.category);
      }
      
      // Sort by date (newest first)
      filteredBlogs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      
      return {
        success: true,
        data: filteredBlogs
      };
    } catch (error) {
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
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    try {
      const blog = blogsData.find(b => b.Id === parseInt(id));
      
      if (!blog) {
        return {
          success: false,
          error: 'Blog post not found'
        };
      }
      
      return {
        success: true,
        data: blog
      };
    } catch (error) {
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
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 250));
    
    try {
      const filteredBlogs = blogsData
        .filter(blog => blog.category === category)
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      
      return {
        success: true,
        data: filteredBlogs
      };
    } catch (error) {
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
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    try {
      const featuredBlogs = blogsData
        .filter(blog => blog.featured)
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 3);
      
      return {
        success: true,
        data: featuredBlogs
      };
    } catch (error) {
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
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    try {
      const recentBlogs = blogsData
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, limit);
      
      return {
        success: true,
        data: recentBlogs
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch recent blog posts'
      };
    }
  }
};