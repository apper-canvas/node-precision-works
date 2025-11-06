import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
const ProductModal = ({ product, isOpen, onClose, onRequestQuote }) => {
  const downloadSpecs = () => {
    try {
      if (!product?.specifications) {
        toast.error('No specifications available for this product');
        return;
      }

      // Generate formatted specification content
      let specContent = `${product.name} - Technical Specifications\n`;
      specContent += `${'='.repeat(50)}\n\n`;
      
      const specs = product.specifications;
      
      // Add all available specifications
      Object.entries(specs).forEach(([key, value]) => {
        if (value && value !== '') {
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          specContent += `${formattedKey}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
        }
      });
      
      specContent += `\nGenerated on: ${new Date().toLocaleDateString()}\n`;
      
      // Create and download file
      const blob = new Blob([specContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${product.name.replace(/[^a-zA-Z0-9]/g, '_')}_specifications.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('Specifications downloaded successfully');
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Failed to download specifications');
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                  <Badge variant="primary" className="mt-1">{product.category}</Badge>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ApperIcon name="X" size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {product.images.length > 1 && (
                      <div className="grid grid-cols-3 gap-2">
                        {product.images.slice(1, 4).map((image, index) => (
                          <div key={index} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded overflow-hidden">
                            <img
                              src={image}
                              alt={`${product.name} ${index + 2}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Specifications</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <table className="w-full">
                          <tbody className="space-y-2">
                            {Object.entries(product.specifications).map(([key, value]) => (
                              <tr key={key} className="border-b border-gray-200 last:border-b-0">
                                <td className="py-2 text-sm font-medium text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}:
                                </td>
                                <td className="py-2 text-sm text-gray-900 font-medium">
                                  {value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Materials</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.materials.map((material, index) => (
                          <Badge key={index} variant="gray" size="sm">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                      <div className="flex items-center">
                        <ApperIcon name="Clock" size={16} className="text-primary-600 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-primary-800">Lead Time</p>
                          <p className="text-sm text-primary-700">{product.leadTime}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="accent"
                        className="flex-1"
                        onClick={() => {
                          onRequestQuote(product);
                          onClose();
                        }}
                        icon="MessageCircle"
                      >
                        Request Quote
                      </Button>
<Button
                        variant="outline"
                        icon="Download"
                        onClick={downloadSpecs}
                      >
                        Download Specs
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;