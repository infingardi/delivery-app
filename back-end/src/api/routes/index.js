const { Router } = require("express");
const { router } = require("../app");
const user = require("./users.route");

const route = Router();

route.use('/login', user);

module.exports = route;