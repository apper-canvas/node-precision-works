import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import CapabilityCard from "@/components/molecules/CapabilityCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { capabilityService } from "@/services/api/capabilityService";

const Capabilities = () => {
  const [capabilities, setCapabilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCapabilities();
  }, []);

  const loadCapabilities = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await capabilityService.getAll();
      setCapabilities(data);
    } catch (err) {
      setError("Failed to load capabilities. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const processHighlights = [
    {
      title: "Advanced Quality Control",
      description: "CMM inspection, laser scanning, and statistical process control",
      icon: "Target",
      features: ["±0.0001\" measurement accuracy", "3D scanning verification", "Real-time SPC monitoring", "Certificate of compliance"]
    },
    {
      title: "Material Expertise", 
      description: "Comprehensive knowledge of engineering materials and applications",
      icon: "Package",
      features: ["Aerospace alloys", "Medical grade materials", "High-temp resistant", "Custom material sourcing"]
    },
    {
      title: "Production Flexibility",
      description: "From prototype to high-volume production with rapid turnaround",
      icon: "Zap",
      features: ["24-hour prototype", "Scalable production", "Lean manufacturing", "Just-in-time delivery"]
    }
  ];

  if (loading) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h1>
            <p className="text-xl text-gray-600">Loading capabilities...</p>
          </div>
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h1>
          </div>
          <Error message={error} onRetry={loadCapabilities} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Manufacturing Capabilities
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto">
              State-of-the-art equipment, advanced processes, and skilled technicians 
              deliver precision components that meet the most demanding specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Process Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach combines advanced technology with proven processes 
              to deliver consistent quality and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processHighlights.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={process.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {process.description}
                </p>
                <ul className="space-y-2">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <ApperIcon name="CheckCircle2" size={16} className="text-success mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Equipment & Processes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing equipment and proven processes ensure precision, 
              quality, and efficiency across all production requirements.
            </p>
          </motion.div>

          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={capability.Id}
                capability={capability}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications demonstrate our commitment to precision 
              and ability to meet demanding tolerance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <ApperIcon name="Ruler" size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Tolerance Capabilities</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Linear Dimensions:</span>
                  <span className="font-semibold text-gray-900">±0.0001″</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Angular Tolerances:</span>
                  <span className="font-semibold text-gray-900">±0.0002″</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Surface Finish:</span>
                  <span className="font-semibold text-gray-900">8 µin Ra</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Roundness:</span>
                  <span className="font-semibold text-gray-900">0.00005″</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Flatness:</span>
                  <span className="font-semibold text-gray-900">0.0001″</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <ApperIcon name="Box" size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Size Capabilities</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Maximum Part Size:</span>
                  <span className="font-semibold text-gray-900">48″ x 36″ x 24″</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Minimum Feature:</span>
                  <span className="font-semibold text-gray-900">0.005″</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Wall Thickness:</span>
                  <span className="font-semibold text-gray-900">0.020″ min</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Thread Pitch:</span>
                  <span className="font-semibold text-gray-900">0.3mm - 6mm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hole Diameter:</span>
                  <span className="font-semibold text-gray-900">0.010″ - 6″</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our engineering team is ready to review your specifications and 
              recommend the best manufacturing approach for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent inline-flex items-center justify-center">
                <ApperIcon name="MessageCircle" size={20} className="mr-2" />
                Get Technical Quote
              </a>
              <a href="tel:+15551234567" className="btn-secondary inline-flex items-center justify-center">
                <ApperIcon name="Phone" size={20} className="mr-2" />
                Speak with Engineer
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;