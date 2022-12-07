const express = require('express');
const controller = require('../controllers/transactionController');

const router = express.Router();

router.post('/transactions', controller.getTransactions);

 module.exports = router;