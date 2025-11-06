import capabilitiesData from "@/services/mockData/capabilities.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const capabilityService = {
  async getAll() {
    await delay(300);
    return [...capabilitiesData];
  },

  async getById(id) {
    await delay(200);
    const capability = capabilitiesData.find(c => c.Id === parseInt(id));
    if (!capability) {
      throw new Error("Capability not found");
    }
    return { ...capability };
  },

  async create(capabilityData) {
    await delay(400);
    const maxId = Math.max(...capabilitiesData.map(c => c.Id));
    const newCapability = {
      ...capabilityData,
      Id: maxId + 1
    };
    capabilitiesData.push(newCapability);
    return { ...newCapability };
  },

  async update(id, capabilityData) {
    await delay(300);
    const index = capabilitiesData.findIndex(c => c.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Capability not found");
    }
    capabilitiesData[index] = { ...capabilitiesData[index], ...capabilityData };
    return { ...capabilitiesData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = capabilitiesData.findIndex(c => c.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Capability not found");
    }
    const deletedCapability = { ...capabilitiesData[index] };
    capabilitiesData.splice(index, 1);
    return deletedCapability;
  }
};