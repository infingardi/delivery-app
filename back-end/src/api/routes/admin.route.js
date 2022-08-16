const { Router } = require('express');
const controller = require('../controller/User.controller');

const admin = Router();

admin.post('/', controller.validateLogin);
admin.post('/register', controller.validateUser, controller.createAdmin);

module.exports = admin;