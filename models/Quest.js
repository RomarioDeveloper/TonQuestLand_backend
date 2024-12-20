// models/Quest.js
const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    rewards: { type: Array, required: true },
    // другие поля
});

module.exports = mongoose.model('Quest', QuestSchema);