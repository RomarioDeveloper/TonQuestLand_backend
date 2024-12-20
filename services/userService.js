// services/userService.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { verifyTelegramAuth } = require('../utils/authUtils');

async function authenticateUser(req, res) {
    const { id, first_name, last_name, username, photo_url, auth_date, hash } = req.body;

    const telegramData = { id, first_name, last_name, username, photo_url, auth_date, hash };

    console.log('Received Telegram Data:', telegramData); // Log the received data

    try {
        // Verify Telegram authentication
        const isValid = verifyTelegramAuth(telegramData);
        if (!isValid) {
            return res.status(401).send({ message: 'Authentication failed' });
        }

        // Find or create user
        let user = await User.findOne({ telegramId: id });
        if (!user) {
            user = new User({ telegramId: id, firstName: first_name, lastName: last_name, username, photoUrl: photo_url });
            await user.save();
        }

        // Generate JWT token
        const token = jwt.sign({ telegramId: id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ message: 'User authenticated successfully', token });
    } catch (error) {
        res.status(500).send({ message: 'Authentication error', error });
    }
}

module.exports = { authenticateUser };