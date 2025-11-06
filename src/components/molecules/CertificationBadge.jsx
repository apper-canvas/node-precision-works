import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const CertificationBadge = ({ certification, index }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  const isExpiringSoon = (dateString) => {
    const expiryDate = new Date(dateString);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return expiryDate < sixMonthsFromNow;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="card p-6 text-center"
    >
      <div className="mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto flex items-center justify-center mb-3">
          <ApperIcon name="Award" size={28} className="text-primary-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {certification.name}
        </h3>
        <p className="text-sm text-gray-600">
          {certification.issuingBody}
        </p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Certificate:</span>
          <span className="font-mono text-xs text-gray-700">
            {certification.number}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Valid Until:</span>
          <span className={`font-medium ${isExpiringSoon(certification.validUntil) ? 'text-warning' : 'text-success'}`}>
            {formatDate(certification.validUntil)}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-center">
          <ApperIcon 
            name="CheckCircle2" 
            size={16} 
            className="text-success mr-2" 
          />
          <span className="text-sm font-medium text-success">Active</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationBadge;