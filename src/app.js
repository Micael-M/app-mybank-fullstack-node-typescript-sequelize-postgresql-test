const express = require('express');
const accountController = require('./controllers/accountController');

const app = express();
app.use(express.json());

// Routes
app.get('/accounts', accountController.getAllAccounts);

module.exports = app;
