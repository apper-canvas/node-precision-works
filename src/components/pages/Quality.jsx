import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import CertificationBadge from "@/components/molecules/CertificationBadge";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { certificationService } from "@/services/api/certificationService";

const Quality = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await certificationService.getAll();
      setCertifications(data);
    } catch (err) {
      setError("Failed to load certifications. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const qualityProcesses = [
    {
      title: "Incoming Inspection",
      description: "All raw materials verified against specifications before production",
      icon: "Package",
      steps: [
        "Material certification review",
        "Dimensional verification", 
        "Chemical composition analysis",
        "Surface condition inspection"
      ]
    },
    {
      title: "In-Process Control",
      description: "Continuous monitoring throughout manufacturing operations",
      icon: "Activity",
      steps: [
        "First article inspection",
        "Statistical process control",
        "Real-time monitoring",
        "Operator verification checks"
      ]
    },
    {
      title: "Final Inspection",
      description: "Comprehensive validation before shipment approval",
      icon: "CheckCircle2",
      steps: [
        "CMM dimensional inspection",
        "Surface finish verification",
        "Functional testing",
        "Certificate of conformance"
      ]
    }
  ];

  const testingCapabilities = [
    {
      category: "Dimensional Testing",
      icon: "Ruler",
      capabilities: [
        "Coordinate Measuring Machine (CMM)",
        "Laser measurement systems",
        "Vision measurement systems",
        "Gauge pin and plug measurements",
        "Thread pitch verification"
      ]
    },
    {
      category: "Material Testing",
      icon: "Beaker",
      capabilities: [
        "Hardness testing (Rockwell, Vickers)",
        "Tensile strength testing",
        "Chemical composition analysis",
        "Grain structure evaluation",
        "Stress relief verification"
      ]
    },
    {
      category: "Surface Analysis",
      icon: "Eye",
      capabilities: [
        "Surface roughness measurement", 
        "Coating thickness verification",
        "Porosity inspection",
        "Visual inspection standards",
        "Dye penetrant testing"
      ]
    },
    {
      category: "Environmental Testing",
      icon: "Thermometer",
      capabilities: [
        "Temperature cycling",
        "Humidity resistance",
        "Salt spray testing",
        "Vibration testing",
        "Shock testing"
      ]
    }
  ];

  if (loading) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quality Standards</h1>
            <p className="text-xl text-gray-600">Loading quality information...</p>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quality Standards</h1>
          </div>
          <Error message={error} onRetry={loadCertifications} />
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
              Quality Standards
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto">
              Our commitment to excellence is demonstrated through rigorous quality management systems, 
              industry certifications, and comprehensive testing procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Quality is Our Foundation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Precision Works, quality isn't just a department—it's embedded in every 
                aspect of our manufacturing process. From initial design review to final 
                inspection, we maintain the highest standards to ensure your components 
                meet or exceed specifications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-success/10 p-2 rounded-full mr-4 mt-1">
                    <ApperIcon name="Shield" size={20} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zero-Defect Philosophy</h3>
                    <p className="text-gray-600">Continuous improvement and preventive measures eliminate quality issues at the source.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-success/10 p-2 rounded-full mr-4 mt-1">
                    <ApperIcon name="Users" size={20} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Trained Personnel</h3>
                    <p className="text-gray-600">Certified quality technicians and ongoing training ensure consistent execution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-success/10 p-2 rounded-full mr-4 mt-1">
                    <ApperIcon name="FileCheck" size={20} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete Traceability</h3>
                    <p className="text-gray-600">Full documentation and traceability from raw materials through delivery.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Award" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Metrics</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800 mb-1">99.97%</div>
                  <div className="text-gray-600">First-Pass Yield Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800 mb-1">&lt; 10 PPM</div>
                  <div className="text-gray-600">Defect Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800 mb-1">100%</div>
                  <div className="text-gray-600">On-Time Delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to quality control ensures consistency and 
              reliability throughout the manufacturing process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={process.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {process.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <ApperIcon name="CheckCircle2" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications demonstrate compliance with the most rigorous 
              industry standards and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certification, index) => (
              <CertificationBadge
                key={certification.Id}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Testing & Inspection Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced testing equipment and procedures ensure components meet 
              specifications and perform reliably in their intended applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingCapabilities.map((testing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name={testing.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testing.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {testing.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start">
                      <ApperIcon name="CheckCircle2" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Quality You Can Trust
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Experience the difference that rigorous quality standards make. 
              Contact us to learn more about our quality processes and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent inline-flex items-center justify-center">
                <ApperIcon name="FileText" size={20} className="mr-2" />
                Request Quality Documentation
              </a>
              <a href="tel:+15551234567" className="btn-secondary inline-flex items-center justify-center">
                <ApperIcon name="Phone" size={20} className="mr-2" />
                Speak with Quality Manager
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Quality;