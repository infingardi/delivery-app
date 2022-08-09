const { Router } = require("express");
const user = require("./users.route");

const route = Router();

route.get('/',  (req, res) => res.json({ message: 'entrou'}))
route.use('/login', user);

module.exports = route;