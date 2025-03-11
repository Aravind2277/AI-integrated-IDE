const mongoose = require('mongoose');

const AnalysisSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    errors: [{
        line: Number,
        message: String
    }],
    explanations: [{
        line: Number,
        explanation: String
    }],
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Analysis', AnalysisSchema); 