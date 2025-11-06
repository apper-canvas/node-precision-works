import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const CapabilityCard = ({ capability, index }) => {
  const getIcon = (name) => {
    if (name.toLowerCase().includes("machining")) return "Settings";
    if (name.toLowerCase().includes("turning")) return "RotateCw";
    if (name.toLowerCase().includes("edm")) return "Zap";
    if (name.toLowerCase().includes("fabrication")) return "Wrench";
    if (name.toLowerCase().includes("inspection")) return "Search";
    if (name.toLowerCase().includes("finishing")) return "Palette";
    return "Tool";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
          <ApperIcon 
            name={getIcon(capability.name)} 
            size={24} 
            className="text-white" 
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {capability.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {capability.description}
          </p>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Equipment:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {capability.equipment.slice(0, 3).map((equipment, idx) => (
                  <li key={idx} className="flex items-center">
                    <ApperIcon name="CheckCircle2" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                    {equipment}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Capacity:</span>
                <span className="font-medium text-gray-900">{capability.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilityCard;