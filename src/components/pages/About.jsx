import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const About = () => {
  const timeline = [
    {
      year: "1999",
      title: "Company Founded",
      description: "Precision Works established with focus on small-batch precision machining"
    },
    {
      year: "2003",
      title: "ISO 9001 Certified",
      description: "Achieved first quality certification, establishing foundation for systematic quality"
    },
    {
      year: "2008",
      title: "Facility Expansion",
      description: "Doubled manufacturing space and added advanced CNC machining centers"
    },
    {
      year: "2012",
      title: "Aerospace Certification",
      description: "AS9100 certification opened aerospace and defense market opportunities"
    },
    {
      year: "2016",
      title: "Medical Device Focus",
      description: "ISO 13485 certification enabled entry into medical device manufacturing"
    },
    {
      year: "2020",
      title: "Digital Integration",
      description: "Implemented Industry 4.0 technologies for enhanced efficiency and quality"
    },
    {
      year: "2024",
      title: "Continuous Innovation",
      description: "Leading precision manufacturing with cutting-edge technology and processes"
    }
  ];

  const teamMembers = [
    {
      name: "Michael Johnson",
      role: "President & CEO",
      experience: "25+ years manufacturing leadership",
      background: "Aerospace engineering background with expertise in precision manufacturing and quality systems.",
      icon: "User"
    },
    {
      name: "Sarah Chen",
      role: "VP of Operations",
      experience: "20+ years operations management",
      background: "Lean manufacturing specialist focused on process optimization and efficiency improvement.",
      icon: "Users"
    },
    {
      name: "David Rodriguez",
      role: "Quality Manager",
      experience: "18+ years quality assurance",
      background: "Six Sigma Black Belt with extensive experience in aerospace and medical quality standards.",
      icon: "Shield"
    },
    {
      name: "Jennifer Kim",
      role: "Engineering Manager",
      experience: "15+ years design & manufacturing",
      background: "Mechanical engineer specializing in DFM and advanced manufacturing processes.",
      icon: "Settings"
    }
  ];

  const values = [
    {
      title: "Precision",
      description: "Uncompromising commitment to accuracy and attention to detail in every component we manufacture.",
      icon: "Target"
    },
    {
      title: "Quality",
      description: "Systematic approach to quality management ensuring consistent excellence and continuous improvement.",
      icon: "Award"
    },
    {
      title: "Reliability", 
      description: "Dependable delivery performance and consistent results that our customers can count on.",
      icon: "Shield"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and processes to improve capabilities and manufacturing efficiency.",
      icon: "Lightbulb"
    },
    {
      title: "Partnership",
      description: "Collaborative approach that makes us an extension of our customers' engineering teams.",
      icon: "Handshake"
    },
    {
      title: "Integrity",
      description: "Honest communication, transparent processes, and ethical business practices in all relationships.",
      icon: "Heart"
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
              About Precision Works
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto">
              For over 25 years, we've been delivering precision-manufactured components 
              that meet the most demanding specifications across aerospace, medical, and industrial markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence Since 1999
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Precision Works has grown from a small machine shop to a leading precision 
                manufacturing partner serving critical industries worldwide. Our success 
                is built on unwavering commitment to quality, continuous investment in 
                advanced technology, and deep expertise in complex manufacturing processes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in producing high-precision components for aerospace, medical 
                device, automotive, and industrial applications where quality and reliability 
                are essential. Our ISO-certified quality management systems and advanced 
                manufacturing capabilities enable us to meet the most stringent requirements.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-800 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-800 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Active Customers</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-800 mb-1">50,000+</div>
                  <div className="text-sm text-gray-600">Parts Delivered</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-800 mb-1">6+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
<div className="aspect-square bg-gradient-to-br from-primary-100 via-primary-200 to-secondary-200 rounded-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20"></div>
                <div className="relative z-10 text-center">
                  <ApperIcon name="Building2" size={64} className="text-primary-600 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-primary-800">Precision Works</div>
                  <div className="text-sm text-primary-600">Manufacturing Facility</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">ISO Certified</div>
                  <div className="text-sm opacity-90">Quality Management</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, 
              and define how we serve our customers every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={value.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, our growth reflects 
              consistent commitment to excellence and customer success.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-accent-500 h-full"></div>
            
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-800 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders with deep industry expertise and passion 
              for manufacturing excellence guide our organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={member.icon} size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-primary-600 font-medium mb-2">
                      {member.role}
                    </div>
                    <div className="text-sm text-accent-600 mb-3">
                      {member.experience}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.background}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Facility
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our 45,000 square foot manufacturing facility houses advanced CNC 
                machining centers, quality inspection equipment, and specialized 
                processes all under one roof. Climate-controlled environment and 
                organized workflow ensure optimal manufacturing conditions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <ApperIcon name="MapPin" size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">1234 Industrial Drive, Manufacturing City, MC 12345</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <ApperIcon name="Clock" size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Operating Hours</div>
                    <div className="text-gray-600">24/7 operations with emergency support</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <ApperIcon name="Building" size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Facility Size</div>
                    <div className="text-gray-600">45,000 sq ft climate-controlled manufacturing space</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
className="aspect-video bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 rounded-2xl flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-accent-300/30"></div>
              <div className="relative z-10 text-center">
                <ApperIcon name="Factory" size={48} className="text-primary-600 mx-auto mb-3" />
                <div className="text-lg font-semibold text-primary-800">Advanced Manufacturing</div>
                <div className="text-sm text-primary-600">45,000 sq ft facility</div>
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
              Partner with Precision Works
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Experience the reliability and precision that comes from 25+ years 
              of manufacturing excellence. Let's discuss how we can support your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent inline-flex items-center justify-center">
                <ApperIcon name="MessageCircle" size={20} className="mr-2" />
                Start a Conversation
              </a>
              <a href="/capabilities" className="btn-secondary inline-flex items-center justify-center">
                <ApperIcon name="Eye" size={20} className="mr-2" />
                View Capabilities
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;