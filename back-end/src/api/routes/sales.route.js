const { Router } = require('express');
const SalesController = require('../controller/Sales.controller');

const sales = Router();

sales.post('/', SalesController.createSale);
sales.post('/seller', SalesController.getAllSalesSeller);
sales.get('/:id', SalesController.getOrderAndProducts);
sales.put('/:id', SalesController.updateStatus);
sales.post('/customer', SalesController.getAllSalesUser);

module.exports = sales;