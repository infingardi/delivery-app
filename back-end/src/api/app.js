const express = require('express');

const errorHandler = require('./middleware/errorHandler');
const route = require('./routes');

require('express-async-errors');

const app = express();

app.use(express.json());
app.use(route);
app.use(errorHandler);
// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
