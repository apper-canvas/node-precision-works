import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-6 h-full flex flex-col"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img
src="/api/placeholder/400/300"
          alt={product.name_c}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-3">
<Badge variant="primary" size="sm" className="mb-2">
            {product.category_c}
          </Badge>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name_c}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {product.description_c}
          </p>
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <ApperIcon name="Clock" size={14} className="mr-1" />
              <span>{product.lead_time_c}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <ApperIcon name="Package" size={14} className="mr-1" />
              <span>Materials</span>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            size="sm" 
            className="w-full"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;