const { Product } = require('../../database/models');

async function getAllProducts() {
  const product = await Product.findAll();
  
  return product;
}

module.exports = {
  getAllProducts,
};