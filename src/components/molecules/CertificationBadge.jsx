import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const CertificationBadge = ({ certification, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 90 && diffDays > 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card p-6 hover:scale-105 transition-all duration-200"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-br from-accent-100 to-primary-100 p-3 rounded-lg flex-shrink-0">
          <ApperIcon name="Award" size={24} className="text-primary-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {certification.name_c}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <ApperIcon name="Building" size={14} className="mr-2 flex-shrink-0" />
              <span className="truncate">{certification.issuing_body_c}</span>
            </div>
            
            <div className="flex items-center">
              <ApperIcon name="Hash" size={14} className="mr-2 flex-shrink-0" />
              <span className="truncate">{certification.number_c}</span>
            </div>
            
            <div className="flex items-center">
              <ApperIcon name="Calendar" size={14} className="mr-2 flex-shrink-0" />
              <span>Valid until {formatDate(certification.valid_until_c)}</span>
              {isExpiringSoon(certification.valid_until_c) && (
                <span className="ml-2 px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">
                  Expiring Soon
                </span>
              )}
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <ApperIcon name="Shield" size={12} className="mr-1" />
              <span>Certified</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationBadge;