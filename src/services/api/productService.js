import productsData from "@/services/mockData/products.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const productService = {
  async getAll() {
    await delay(300);
    return [...productsData];
  },

  async getById(id) {
    await delay(200);
    const product = productsData.find(p => p.Id === parseInt(id));
    if (!product) {
      throw new Error("Product not found");
    }
    return { ...product };
  },

  async getByCategory(category) {
    await delay(250);
    return productsData.filter(p => p.category === category).map(p => ({ ...p }));
  },

  async getCategories() {
    await delay(150);
    const categories = [...new Set(productsData.map(p => p.category))];
    return categories;
  },

  async create(productData) {
    await delay(400);
    const maxId = Math.max(...productsData.map(p => p.Id));
    const newProduct = {
      ...productData,
      Id: maxId + 1
    };
    productsData.push(newProduct);
    return { ...newProduct };
  },

  async update(id, productData) {
    await delay(300);
    const index = productsData.findIndex(p => p.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Product not found");
    }
    productsData[index] = { ...productsData[index], ...productData };
    return { ...productsData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = productsData.findIndex(p => p.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Product not found");
    }
    const deletedProduct = { ...productsData[index] };
    productsData.splice(index, 1);
    return deletedProduct;
  }
};