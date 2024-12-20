// controllers/adminController.js
const express = require('express');
const router = express.Router();
const { getUserStats, getQuestStats } = require('../services/adminService');

router.get('/user-stats', getUserStats);
router.get('/quest-stats', getQuestStats);

module.exports = router;