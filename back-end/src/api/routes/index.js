const { Router } = require('express');
const user = require('./users.route');
const product = require('./products.route');
const admin = require('./admin.route');
const sales = require('./sales.route');

const route = Router();

route.use('/login', user);
route.use('/product', product);
route.use('/admin/manage', admin);
route.use('/seller/orders', sales);

module.exports = route;