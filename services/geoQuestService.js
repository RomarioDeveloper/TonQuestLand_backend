// services/geoQuestService.js
const { verifyLocation } = require('../utils/geoUtils');

async function completeGeoQuest(userId, questId, location) {
    const isValidLocation = verifyLocation(location);
    if (isValidLocation) {
        // Логика завершения геоквеста
        res.status(200).send({ message: 'GeoQuest completed successfully' });
    } else {
        res.status(400).send({ message: 'Invalid location' });
    }
}

module.exports = { completeGeoQuest };