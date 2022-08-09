const { Router } = require('express');

const admin = Router();

admin.get('/manage');

module.exports = admin;