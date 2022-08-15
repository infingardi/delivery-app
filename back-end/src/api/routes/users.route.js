const { Router } = require('express');
const controller = require('../controller/User.controller');

const user = Router();

user.post('/login', controller.validateLogin);
user.post('/userid', controller.getIdFromUser);
user.post('/register', controller.validateUser, controller.createCustomer);

module.exports = user;