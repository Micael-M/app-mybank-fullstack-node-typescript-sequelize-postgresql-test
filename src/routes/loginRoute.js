const express = require('express');
const controller = require('../controllers/loginController');

const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;
