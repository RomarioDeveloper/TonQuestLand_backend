// services/adminService.js
async function getUserStats(req, res) {
    // Логика получения статистики пользователей
    res.status(200).send({ userStats: [] });
}

async function getQuestStats(req, res) {
    // Логика получения статистики квестов
    res.status(200).send({ questStats: [] });
}

module.exports = { getUserStats, getQuestStats };