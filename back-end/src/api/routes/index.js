const { Router } = require('express');
const user = require('./users.route');
const product = require('./products.route');

const route = Router();

route.use('/login', user);
route.use('/product', product);

module.exports = route;