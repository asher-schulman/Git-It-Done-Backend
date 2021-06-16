const mongoose = require("mongoose");
const Task = require('./Task.model')
const User = require('./User.model')

const Schema = mongoose.Schema

const workspaceSchema = new Schema({
    // array of users who are in this workspace
    users: [{
        type: Schema.ObjectId,
        ref: User
    }],
    // arr of tasks inside this workspace
    tasks: [{
        type: Schema.ObjectId,
        ref: Task
    }],
    sessionData: {type: Array}
})

module.exports = mongoose.model('Workspace', workspaceSchema)