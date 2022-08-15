const { Router } = require('express');
const SalesController = require('../controller/Sales.controller');

const sales = Router();

sales.get('/seller', SalesController.getAllSalesSeller);
sales.get('/customer', SalesController.getAllSalesUser);
sales.post('/', SalesController.createSale);

module.exports = sales;