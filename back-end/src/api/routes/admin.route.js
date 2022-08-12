const { Router } = require('express');
const Controller = require('../controller/User.controller');

const admin = Router();

admin.post('/', Controller.validateUser, Controller.createAdmin);

module.exports = admin;