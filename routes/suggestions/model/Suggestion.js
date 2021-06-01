const mongoose = require('mongoose');

const suggestionsSchema = new mongoose.Schema({
    title: {
        type: String, 
        lowercase: true,
        unique: true,
        required: true,
    },
    author: {
        type: String,
        lowercase: true,
    },
    suggestion: {
        type: String,
        required: true,
        lowercase: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    anonymous: {
        type: Boolean,
    },
    timeCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('suggestion-hw', suggestionsSchema)
