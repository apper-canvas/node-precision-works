import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import BlogCard from '@/components/molecules/BlogCard';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { blogService } from '@/services/api/blogService';

function BlogInsights() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Industry Insights', label: 'Industry Insights' },
    { value: 'Company News', label: 'Company News' },
    { value: 'Manufacturing Tips', label: 'Manufacturing Tips' },
    { value: 'Quality', label: 'Quality' }
  ];

  useEffect(() => {
    loadBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, selectedCategory]);

  async function loadBlogs() {
    try {
      setLoading(true);
      setError(null);

      const result = await blogService.getAll();
      
      if (result.success) {
        setBlogs(result.data);
      } else {
        setError(result.error || 'Failed to load blog posts');
        toast.error('Failed to load blog posts');
      }
    } catch (err) {
      setError('Failed to load blog posts');
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  }

  function filterBlogs() {
    let filtered = [...blogs];

    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(search) ||
        blog.excerpt.toLowerCase().includes(search) ||
        blog.content.toLowerCase().includes(search) ||
        blog.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function clearFilters() {
    setSearchTerm('');
    setSelectedCategory('all');
    toast.info('Filters cleared');
  }

  if (loading) {
    return <Loading className="min-h-screen" />;
  }

  if (error && blogs.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Error 
          message={error} 
          onRetry={loadBlogs}
          className="min-h-screen"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Manufacturing Insights
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Industry expertise, company updates, and manufacturing best practices from the precision manufacturing leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <ApperIcon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                options={categories}
                className="min-w-48"
              />
              
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <ApperIcon name="X" size={16} />
                  Clear
                </button>
              )}
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'} found
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <Empty
              icon="FileText"
              title="No blog posts found"
              description={
                searchTerm || selectedCategory !== 'all'
                  ? "Try adjusting your search terms or filters"
                  : "Check back soon for the latest insights"
              }
              action={
                (searchTerm || selectedCategory !== 'all') ? (
                  <button
                    onClick={clearFilters}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                ) : null
              }
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.Id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogInsights;