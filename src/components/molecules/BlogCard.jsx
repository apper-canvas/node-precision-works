import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Badge from '@/components/atoms/Badge';

function BlogCard({ blog }) {
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function getCategoryColor(category) {
    switch (category) {
      case 'Industry Insights':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Company News':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Manufacturing Tips':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Quality':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="card h-full"
    >
      <Link 
        to={`/insights/${blog.Id}`}
        className="block p-6 h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <Badge 
            variant="outline" 
            className={getCategoryColor(blog.category)}
          >
            {blog.category}
          </Badge>
          {blog.featured && (
            <div className="flex items-center text-accent-500">
              <ApperIcon name="Star" size={16} className="fill-current" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
          
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{blog.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <ApperIcon name="User" size={14} className="mr-1" />
            <span className="truncate">{blog.author}</span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center">
              <ApperIcon name="Calendar" size={14} className="mr-1" />
              {formatDate(blog.publishedAt)}
            </div>
            <div className="flex items-center">
              <ApperIcon name="Clock" size={14} className="mr-1" />
              {blog.readTime} min
            </div>
          </div>
        </div>

        {/* Read More Indicator */}
        <div className="flex items-center justify-end mt-3 text-primary-600 text-sm font-medium">
          Read More
          <ApperIcon name="ArrowRight" size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}

export default BlogCard;