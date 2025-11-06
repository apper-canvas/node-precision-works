import React, { useState } from "react";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import Select from "@/components/atoms/Select";
import { contactService } from "@/services/api/contactService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
    attachments: []
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: files
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.contactName) newErrors.contactName = "Contact name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.message) newErrors.message = "Please provide details about your inquiry";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await contactService.submitInquiry(formData);
      toast.success("Your inquiry has been submitted successfully! We'll respond within 24 hours.");
      
      // Reset form
      setFormData({
        inquiryType: "",
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        message: "",
        attachments: []
      });
    } catch (error) {
      toast.error("There was an error submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Inquiry Type"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleInputChange}
          error={errors.inquiryType}
        >
          <option value="">Select inquiry type</option>
          <option value="quote-request">Quote Request</option>
          <option value="technical-question">Technical Question</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="general">General Information</option>
        </Select>

        <Input
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          error={errors.companyName}
          placeholder="Your company name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Contact Name"
          name="contactName"
          value={formData.contactName}
          onChange={handleInputChange}
          error={errors.contactName}
          placeholder="Your full name"
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder="your.email@company.com"
        />
      </div>

      <Input
        label="Phone Number (Optional)"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="(555) 123-4567"
      />

      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        error={errors.message}
        rows={6}
        placeholder="Please provide details about your project requirements, specifications, quantities, timeline, and any other relevant information..."
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Attachments (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
          <ApperIcon name="Upload" size={32} className="mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Upload drawings, specifications, or reference files
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
            accept=".pdf,.dwg,.step,.igs,.jpg,.png"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium"
          >
            Choose files
          </label>
          <p className="text-xs text-gray-500 mt-1">
            PDF, DWG, STEP, IGS, JPG, PNG (max 10MB each)
          </p>
        </div>
        
        {formData.attachments.length > 0 && (
          <div className="mt-3 space-y-2">
            {formData.attachments.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                <div className="flex items-center">
                  <ApperIcon name="File" size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">{file.name}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
        <div className="flex items-start">
          <ApperIcon name="Clock" size={16} className="text-primary-600 mr-2 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-primary-800">Response Time Commitment:</p>
            <p className="text-primary-700">
              We respond to all inquiries within 24 hours during business days. 
              Quote requests typically receive detailed responses within 48-72 hours.
            </p>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        loading={isSubmitting}
        className="w-full md:w-auto"
      >
        Submit Inquiry
      </Button>
    </form>
  );
};

export default ContactForm;