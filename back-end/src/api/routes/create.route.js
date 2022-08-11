const { Router } = require('express');
const controller = require('../controller/User.controller');

const create = Router();

create.post('/customer', controller.validateUser, controller.createCustomer);

module.exports = create;