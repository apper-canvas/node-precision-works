import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-primary-100 to-accent-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertTriangle" size={48} className="text-primary-600" />
          </div>
          
          <div className="text-6xl lg:text-7xl font-bold text-primary-800 mb-4">
            404
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="lg" icon="Home">
                Go Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" icon="Package">
                View Products
              </Button>
            </Link>
          </div>
          
          <div className="pt-6">
            <p className="text-sm text-gray-500 mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link 
                to="/capabilities" 
                className="text-primary-600 hover:text-primary-700 text-sm underline"
              >
                Manufacturing Capabilities
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                to="/quality" 
                className="text-primary-600 hover:text-primary-700 text-sm underline"
              >
                Quality Standards
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                to="/contact" 
                className="text-primary-600 hover:text-primary-700 text-sm underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;