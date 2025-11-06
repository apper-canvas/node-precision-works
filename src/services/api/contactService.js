const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let inquiries = [];

export const contactService = {
  async submitInquiry(inquiryData) {
    await delay(500);
    const newInquiry = {
      ...inquiryData,
      Id: inquiries.length + 1,
      timestamp: new Date().toISOString()
    };
    inquiries.push(newInquiry);
    return { ...newInquiry };
  },

  async getAll() {
    await delay(300);
    return [...inquiries];
  },

  async getById(id) {
    await delay(200);
    const inquiry = inquiries.find(i => i.Id === parseInt(id));
    if (!inquiry) {
      throw new Error("Inquiry not found");
    }
    return { ...inquiry };
  }
};