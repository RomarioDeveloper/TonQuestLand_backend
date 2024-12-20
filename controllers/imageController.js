// controllers/imageController.js
const express = require('express');
const router = express.Router();
const { generateImage } = require('../services/imageService');

router.post('/generate', async (req, res) => {
    try {
        const metadata = req.body;
        const result = await generateImage(metadata);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: 'Error generating image', error });
    }
});

module.exports = router;