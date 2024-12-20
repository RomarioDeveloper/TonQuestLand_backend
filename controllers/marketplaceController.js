// controllers/marketplaceController.js
const express = require('express');
const router = express.Router();
const { listItems, buyItem } = require('../services/marketplaceService');

router.get('/items', listItems);
router.post('/buy', buyItem);

module.exports = router;