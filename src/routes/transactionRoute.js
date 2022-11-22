const express = require('express');
const controller = require('../controllers/transactionController');

const router = express.Router();

router.post('/transaction', controller.create);

 module.exports = router;
