const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    address: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true,
        minLength: 8
    },
    termsAndCondition: {
        type:Boolean,
        required: true
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;