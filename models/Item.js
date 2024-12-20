// models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    // другие поля
});

module.exports = mongoose.model('Item', ItemSchema);