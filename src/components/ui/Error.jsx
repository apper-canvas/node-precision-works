import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry, className = "" }) => {
  return (
    <div className={`text-center py-12 px-4 ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-error/10 to-error/5 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <ApperIcon 
            name="AlertTriangle" 
            size={32} 
            className="text-error"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ApperIcon name="RefreshCw" size={16} />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;