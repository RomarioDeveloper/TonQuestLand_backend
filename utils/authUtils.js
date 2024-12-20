// services/authUtils.js
const crypto = require('crypto');

function verifyTelegramAuth(data) {
    const secret = crypto.createHash('sha256').update(process.env.TELEGRAM_BOT_TOKEN).digest();
    const checkString = Object.keys(data)
        .filter(key => key !== 'hash')
        .sort()
        .map(key => `${key}=${data[key]}`)
        .join('\n');
    const hash = crypto.createHmac('sha256', secret).update(checkString).digest('hex');
    return hash === data.hash;
}

module.exports = { verifyTelegramAuth };