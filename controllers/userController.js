// controllers/userController.js
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../services/userService');

router.post('/authenticate', authenticateUser);

module.exports = router;