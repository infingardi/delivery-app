const ProductService = require('../services/Products.service');

const getAllProducts = async (req, res, next) => {
  const products = await ProductService.getAllProducts();

  
  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};