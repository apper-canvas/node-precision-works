import React from "react";

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse space-y-4 ${className}`}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-card">
            <div className="h-48 bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 rounded-lg mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-accent-200/30 animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gradient-to-r from-primary-200 to-primary-300 rounded w-3/4 animate-pulse"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full animate-pulse"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 animate-pulse"></div>
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full w-20 animate-pulse"></div>
                <div className="h-8 bg-gradient-to-r from-accent-200 to-accent-300 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;