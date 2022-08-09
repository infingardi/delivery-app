const { Router } = require("express");
const { validateLoginController } = require("../controller/User.controller");

const user = Router();

user.post('/', validateLoginController);

module.exports = user;