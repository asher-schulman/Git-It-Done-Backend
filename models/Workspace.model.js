const mongoose = require("mongoose");
const Task = require('./Task.model')
const User = require('./User.model')

const Schema = mongoose.Schema

const workspaceSchema = new Schema({
    workspaceID: {
        type: String, 
        required: true
    },
    // array of users who are in this workspace
    // workspaceUsers: [User]
    workspaceUsers: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    // arr of tasks inside this workspace
    // tasks: [Task]
    tasks: [{
        type: Schema.ObjectId,
        ref: 'Task'
    }],
    sessionData: {type: Array}
})

module.exports = mongoose.model('Workspace', workspaceSchema)