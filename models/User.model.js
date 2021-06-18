const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    // google id is used like username
    googleId : {
        type : String,
        // required: true 
    },
    tokenId : {
        type : String,
        // required: true 
    },
    // this is their display name or alias?
    displayName : String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)