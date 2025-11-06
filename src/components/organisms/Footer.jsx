import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 p-2 rounded-lg">
<div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Settings" size={16} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Precision Works</h3>
                <p className="text-primary-200 text-sm">Manufacturing Excellence</p>
              </div>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Leading manufacturer delivering high-precision components and assemblies 
              with certified quality standards, advanced capabilities, and reliable on-time delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <ApperIcon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <ApperIcon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <ApperIcon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <ApperIcon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-primary-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-primary-200 hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-primary-200 hover:text-white transition-colors">
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-200">
              <div className="flex items-start space-x-2">
                <ApperIcon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>1234 Industrial Drive</p>
                  <p>Manufacturing City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Phone" size={16} className="flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Mail" size={16} className="flex-shrink-0" />
                <a href="mailto:info@precisionworks.com" className="hover:text-white transition-colors">
                  info@precisionworks.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Clock" size={16} className="flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-sm">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm">
            © 2024 Precision Works. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-200 hover:text-white text-sm transition-colors">
              Quality Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;