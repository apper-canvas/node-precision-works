import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import ContactForm from "@/components/molecules/ContactForm";

const Contact = () => {
  const contactMethods = [
    {
      title: "Phone",
      description: "Speak directly with our team",
      value: "(555) 123-4567",
      href: "tel:+15551234567",
      icon: "Phone",
      availability: "Mon-Fri 7AM-6PM, Emergency 24/7"
    },
    {
      title: "Email",
      description: "Send us a message anytime",
      value: "info@precisionworks.com",
      href: "mailto:info@precisionworks.com",
      icon: "Mail",
      availability: "Responses within 2 hours during business days"
    },
    {
      title: "Location",
      description: "Visit our manufacturing facility",
      value: "1234 Industrial Drive\nManufacturing City, MC 12345",
      href: "https://maps.google.com",
      icon: "MapPin",
      availability: "Tours available by appointment"
    }
  ];

  const quickContacts = [
    {
      department: "Sales & Quotes",
      contact: "Mike Thompson",
      phone: "(555) 123-4570",
      email: "quotes@precisionworks.com",
      specialty: "New project inquiries and pricing"
    },
    {
      department: "Engineering Support",
      contact: "Sarah Chen",
      phone: "(555) 123-4571",
      email: "engineering@precisionworks.com",
      specialty: "Technical questions and design review"
    },
    {
      department: "Quality Assurance", 
      contact: "David Rodriguez",
      phone: "(555) 123-4572",
      email: "quality@precisionworks.com",
      specialty: "Quality concerns and certifications"
    },
    {
      department: "Production Support",
      contact: "Jennifer Kim",
      phone: "(555) 123-4573",
      email: "production@precisionworks.com",
      specialty: "Order status and scheduling"
    }
  ];

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
              Contact Precision Works
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto">
              Ready to discuss your precision manufacturing needs? Our experienced team 
              is here to provide technical expertise and competitive solutions for your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team. We're committed to responding 
              quickly and providing the information you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 text-center hover:scale-105 transition-transform duration-200 block"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={method.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="text-primary-600 font-semibold mb-3 whitespace-pre-line">
                  {method.value}
                </div>
                <p className="text-sm text-gray-500">
                  {method.availability}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-xl text-gray-600">
              Provide details about your project and we'll respond with a comprehensive 
              quote including pricing, timeline, and technical recommendations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 lg:p-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Direct Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with the right specialist for faster, more targeted assistance 
              with your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-lg">
                    <ApperIcon name="User" size={20} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {contact.department}
                    </h3>
                    <div className="text-primary-600 font-medium mb-2">
                      {contact.contact}
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <ApperIcon name="Phone" size={14} className="mr-2" />
                        <a href={`tel:${contact.phone}`} className="hover:text-primary-600 transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <ApperIcon name="Mail" size={14} className="mr-2" />
                        <a href={`mailto:${contact.email}`} className="hover:text-primary-600 transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {contact.specialty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Map */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <ApperIcon name="Clock" size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-semibold text-gray-900">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-semibold text-gray-900">Emergency Only</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Emergency Service:</span>
                  <span className="font-semibold text-accent-600">24/7 Available</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                  <div className="flex items-start">
                    <ApperIcon name="Clock" size={16} className="text-accent-600 mr-2 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-accent-800">Response Time Guarantee:</p>
                      <p className="text-accent-700">
                        Phone calls answered within 3 rings during business hours. 
                        Email responses within 2 hours, quotes within 24-48 hours.
                      </p>
                    </div>
                  </div>
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
                  <ApperIcon name="MapPin" size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Visit Our Facility</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Manufacturing Facility</div>
                  <div className="text-gray-600">
                    1234 Industrial Drive<br />
                    Manufacturing City, MC 12345<br />
                    United States
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Facility Tours</div>
                  <div className="text-gray-600">
                    Tours available by appointment. See our advanced equipment, 
                    quality processes, and meet our experienced team.
                  </div>
                </div>
              </div>

<div className="aspect-video bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-accent-200/50"></div>
                <div className="relative z-10 text-center">
                  <ApperIcon name="MapPin" size={48} className="text-primary-600 mx-auto mb-2" />
                  <p className="text-primary-700 font-semibold">Manufacturing Location</p>
                  <p className="text-primary-600 text-sm">Industrial District</p>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                <ApperIcon name="Navigation" size={16} className="mr-2" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;