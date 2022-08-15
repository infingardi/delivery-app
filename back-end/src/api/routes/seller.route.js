const { Router } = require('express');
const SellerController = require('../controller/Seller.controller');

const seller = Router();

seller.get('/', SellerController.getAllSellers);

module.exports = seller;