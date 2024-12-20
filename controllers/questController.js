// controllers/questController.js
const express = require('express');
const router = express.Router();
const { createQuest, getQuests } = require('../services/questService');

router.post('/create', createQuest);
router.get('/', getQuests);

module.exports = router;