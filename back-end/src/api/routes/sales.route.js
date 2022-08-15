const { Router } = require('express');
const SalesController = require('../controller/Sales.controller');

const sales = Router();

sales.post('/seller', SalesController.getAllSalesSeller);
sales.get('/:id', SalesController.getSale);
sales.post('/customer', SalesController.getAllSalesUser);

module.exports = sales;