// middlewares/securityMiddleware.js
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Unauthorized' });
            }
            req.user = decoded;
            next();
        });
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
}

module.exports = { authenticate };