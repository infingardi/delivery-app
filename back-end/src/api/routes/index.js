const { Router } = require('express');
const user = require('./users.route');
const product = require('./products.route');
const admin = require('./admin.route');

const route = Router();

route.use('/product', product);
route.use('/admin/manage', admin);
route.use('/', user);

module.exports = route;