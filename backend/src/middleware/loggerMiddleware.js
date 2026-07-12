const Log = require('../models/Log');

const logRequest = async (req, res, next) => {
    res.on('finish', async () => {
        try {
            await Log.create({
                method: req.method,
                path: req.originalUrl,
                statusCode: res.statusCode,
                userId: req.user ? req.user.id : null,
            });
        } catch (err) {
            console.error('Failed to write log:', err.message);

        }
    });
    next();
};

module.exports = logRequest;