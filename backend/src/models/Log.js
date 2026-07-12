const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    method: String,
    path: String,
    statusCode: Number,
    userId: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);