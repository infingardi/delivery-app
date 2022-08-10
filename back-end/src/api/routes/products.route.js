const { Router } = require('express');
const ProductController = require('../controller/Product.controller');

const product = Router();

product.get('/', ProductController.getAllProducts);

module.exports = product;