const { Router } = require('express');
const user = require('./users.route');
const product = require('./products.route');
const admin = require('./admin.route');
const create = require('./create.route');

const route = Router();

route.use('/', user);
route.use('/product', product);
route.use('/admin/manage', admin);

module.exports = route;