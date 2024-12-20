// controllers/teamController.js
const express = require('express');
const router = express.Router();
const { createTeam, joinTeam } = require('../services/teamService');

router.post('/create', createTeam);
router.post('/join', joinTeam);

module.exports = router;