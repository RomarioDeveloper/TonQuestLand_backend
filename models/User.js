// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    telegramId: { type: String, required: true, unique: true },
    // другие поля
});

module.exports = mongoose.model('User', UserSchema);