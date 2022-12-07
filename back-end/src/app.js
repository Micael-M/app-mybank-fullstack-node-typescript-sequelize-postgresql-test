const express = require('express');

const { login, transaction, validate, transactions } = require('./routes');

const app = express();
app.use(express.json());

// Routes
app.use(login);
app.use(transaction);
app.use(validate);
app.use(transactions);

module.exports = app;
