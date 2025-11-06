import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import { blogService } from '@/services/api/blogService';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadBlogPost();
    }
  }, [id]);

  async function loadBlogPost() {
    try {
      setLoading(true);
      setError(null);

      const result = await blogService.getById(id);
      
      if (result.success) {
        setBlog(result.data);
        // Load related posts from same category
        loadRelatedPosts(result.data.category);
      } else {
        setError(result.error || 'Blog post not found');
        if (result.error === 'Blog post not found') {
          toast.error('Blog post not found');
        }
      }
    } catch (err) {
      setError('Failed to load blog post');
      toast.error('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  }

  async function loadRelatedPosts(category) {
    try {
      const result = await blogService.getByCategory(category);
      if (result.success) {
        // Filter out current post and limit to 3 related posts
        const related = result.data
          .filter(post => post.Id !== parseInt(id))
          .slice(0, 3);
        setRelatedBlogs(related);
      }
    } catch (err) {
      // Silently handle related posts error
      console.info('Could not load related posts');
    }
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function formatContent(content) {
    // Simple markdown-like formatting for better display
    return content
      .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold text-primary-800 mb-6 mt-8">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-semibold text-primary-700 mb-4 mt-6">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-semibold text-primary-600 mb-3 mt-5">$1</h3>')
      .replace(/^\*\* (.+) \*\*$/gm, '<h4 class="text-xl font-semibold text-gray-800 mb-2 mt-4">$1</h4>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 mb-2">$1</li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 mb-2 list-decimal">$2</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">');
  }

  if (loading) {
    return <Loading className="min-h-screen" />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Error 
          message={error} 
          onRetry={loadBlogPost}
          className="min-h-screen"
          action={
            <Button 
              onClick={() => navigate('/insights')}
              variant="secondary"
              className="mt-4"
            >
              <ApperIcon name="ArrowLeft" size={16} className="mr-2" />
              Back to Insights
            </Button>
          }
        />
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/insights"
              className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
            >
              <ApperIcon name="ArrowLeft" size={16} className="mr-2" />
              Back to Insights
            </Link>
            
            <div className="mb-4">
              <Badge 
                variant="secondary" 
                className="bg-accent-500 text-white border-accent-600"
              >
                {blog.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-primary-100 mb-6 leading-relaxed">
              {blog.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-primary-200">
              <div className="flex items-center">
                <ApperIcon name="User" size={16} className="mr-2" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <ApperIcon name="Calendar" size={16} className="mr-2" />
                {formatDate(blog.publishedAt)}
              </div>
              <div className="flex items-center">
                <ApperIcon name="Clock" size={16} className="mr-2" />
                {blog.readTime} min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: `<p class="mb-4 text-gray-700 leading-relaxed">${formatContent(blog.content)}</p>`
              }}
            />
          </motion.article>

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Related Insights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.Id}
                    to={`/insights/${relatedBlog.Id}`}
                    className="card p-6 hover:scale-105 transition-all duration-200"
                  >
                    <Badge variant="outline" className="mb-3">
                      {relatedBlog.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <ApperIcon name="Clock" size={14} className="mr-1" />
                      {relatedBlog.readTime} min read
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogPost;