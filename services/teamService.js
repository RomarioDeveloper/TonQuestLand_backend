// services/teamService.js
async function createTeam(req, res) {
    const { teamName, userId } = req.body;
    // Логика создания команды
    res.status(201).send({ message: 'Team created successfully' });
}

async function joinTeam(req, res) {
    const { teamId, userId } = req.body;
    // Логика присоединения к команде
    res.status(200).send({ message: 'Joined team successfully' });
}

module.exports = { createTeam, joinTeam };