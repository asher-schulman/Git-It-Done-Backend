const mongoose = require("mongoose");
const User = require('./User.model')
const Task = require('./Task.model')

const Schema = mongoose.Schema

const workspaceSchema = new Schema({
    workspaceID: {
        type: String, 
        required: true
    },
    workspaceUsers: [User],
    tasks: [Task],
    sessionData: {type: Array}
})

module.exports = mongoose.model('Workspace', workspaceSchema)