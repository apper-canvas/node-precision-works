import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  icon = "Package", 
  title = "No items found", 
  description = "There are currently no items to display.",
  action,
  className = "" 
}) => {
  return (
    <div className={`text-center py-12 px-4 ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <ApperIcon 
            name={icon} 
            size={32} 
            className="text-primary-600"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        {action && action}
      </div>
    </div>
  );
};

export default Empty;