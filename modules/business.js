const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        lowercase: true,
        enum:['fruit','vegetable','dairy']
    }
})

const Business = mongoose.model('Business',businessSchema);

module.exports = Business;