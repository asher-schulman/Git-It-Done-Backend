const mongoose = require("mongoose");
const Workspace = require('./Workspace.model')

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
    },
    // array of all the workspaces user is a part of
    // workspaces: [Workspace]
    // workspaces: []
    workspaces: [{
        type: Schema.ObjectId,
        ref: 'Workspace'
    }]
})

module.exports = mongoose.model('User', userSchema)