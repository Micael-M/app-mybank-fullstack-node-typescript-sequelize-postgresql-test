const express = require('express');

const { login, transaction } = require('./routes');

const app = express();
app.use(express.json());

// Routes
app.use(login);
app.use(transaction);

module.exports = app;
