import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import ProductCard from "@/components/molecules/ProductCard";
import CertificationBadge from "@/components/molecules/CertificationBadge";
import ProductModal from "@/components/molecules/ProductModal";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { productService } from "@/services/api/productService";
import { certificationService } from "@/services/api/certificationService";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");
      
      const [productsData, certificationsData] = await Promise.all([
        productService.getAll(),
        certificationService.getAll()
      ]);
      
      setFeaturedProducts(productsData.slice(0, 3));
      setCertifications(certificationsData);
    } catch (err) {
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleRequestQuote = () => {
    // Navigate to contact page or show quote form
    window.scrollTo(0, 0);
  };

  const stats = [
    { label: "Years Experience", value: "25+", icon: "Calendar" },
    { label: "Precision Tolerance", value: "±0.0001\"", icon: "Target" },
    { label: "On-Time Delivery", value: "99.7%", icon: "Clock" },
    { label: "Quality Certifications", value: "6+", icon: "Award" }
  ];

  const capabilities = [
    {
      title: "CNC Machining",
      description: "5-axis precision machining with tolerances to ±0.0001\"",
      icon: "Settings"
    },
    {
      title: "Quality Control",
      description: "CMM inspection and certified quality processes",
      icon: "CheckCircle2"
    },
    {
      title: "Fast Turnaround",
      description: "Rapid prototyping and production scheduling",
      icon: "Zap"
    },
    {
      title: "Material Expertise",
      description: "Wide range of metals and engineering plastics",
      icon: "Package"
    }
  ];

  if (loading) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <Error message={error} onRetry={loadData} />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Precision Manufacturing
                <span className="block text-accent-400">Excellence</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Delivering high-quality machined components and assemblies with 
                certified quality standards, advanced capabilities, and reliable on-time delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="accent" size="xl" icon="MessageCircle">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/capabilities">
                  <Button variant="secondary" size="xl" icon="Eye">
                    View Capabilities
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                  >
                    <div className="bg-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ApperIcon name={stat.icon} size={24} className="text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-200">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities and proven processes deliver precision components 
              that meet your exact specifications and quality requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <ApperIcon name={capability.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our precision-manufactured components and assemblies 
              designed for demanding applications across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.Id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="primary" size="lg" icon="ArrowRight">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by industry-recognized certifications 
              and rigorous quality management systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.slice(0, 6).map((certification, index) => (
              <CertificationBadge
                key={certification.Id}
                certification={certification}
                index={index}
              />
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a detailed quote for your precision manufacturing needs. 
              Our team responds within 24 hours with competitive pricing and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="xl" icon="MessageCircle">
                  Request Quote
                </Button>
              </Link>
              <a href="tel:+15551234567">
                <Button variant="secondary" size="xl" icon="Phone">
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
};

export default Home;