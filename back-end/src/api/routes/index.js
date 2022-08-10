const { Router } = require('express');
const user = require('./users.route');
const admin = require('./admin.route');

const route = Router();

route.use('/login', user);
route.use('/admin/manage', admin);

module.exports = route;