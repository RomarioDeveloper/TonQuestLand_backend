// services/questService.js
const Quest = require('../models/Quest');

async function createQuest(req, res) {
    const { type, description, rewards } = req.body;
    // Логика создания квеста
    const newQuest = new Quest({ type, description, rewards });
    await newQuest.save();
    res.status(201).send({ message: 'Quest created successfully' });
}

async function getQuests(req, res) {
    // Логика получения списка квестов
    const quests = await Quest.find();
    res.status(200).send({ quests });
}

module.exports = { createQuest, getQuests };