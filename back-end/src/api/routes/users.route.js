const { Router } = require('express');
const { validateLoginController } = require('../controller/CreateUser.controller');

const user = Router();

user.post('/', validateLoginController);

module.exports = user;