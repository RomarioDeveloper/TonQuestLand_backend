// models/NFTImage.js
const mongoose = require('mongoose');

const NFTImageSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('NFTImage', NFTImageSchema);