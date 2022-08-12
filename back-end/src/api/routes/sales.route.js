const { Router } = require('express');
const SalesController = require('../controller/Sales.controller');

const sales = Router();

sales.get('/', SalesController.getAllSales);

module.exports = sales;