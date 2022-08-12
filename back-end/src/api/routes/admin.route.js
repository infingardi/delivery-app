const { Router } = require('express');
const Controller = require('../controller/User.controller');

const admin = Router();

admin.get('/', Controller.createAdmin);


module.exports = admin;