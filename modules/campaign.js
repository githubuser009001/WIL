const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    causeTitle: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    targetGoals: {
        type:String,
        required: true
    },
    startTime: {
        type:Date,
        required: true
    },
    endTime: {
        type:Date,
        required: true
    }
})

const Campaign = mongoose.model('Campaign',campaignSchema);

module.exports = Campaign;