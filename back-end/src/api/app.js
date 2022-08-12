const express = require('express');
const cors = require('cors');
const path = require('path');

const errorHandler = require('./middleware/errorHandler');
const route = require('./routes');
require('express-async-errors');

const app = express();
app.use('/images', express.static(path.join(__dirname, '../../public')));
app.use(cors());
app.use(express.json());
app.use(route);
app.use(errorHandler);
// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
