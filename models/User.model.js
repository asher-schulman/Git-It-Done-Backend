const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    // google id is used like username
    googleID : {
        type : String,
        required: true 
    },
    // this is their display name or alias?
    displayName : {
        type : String,
        required: true
    },
    image: {type: String},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)