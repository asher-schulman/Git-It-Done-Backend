const mongoose = require("mongoose");
const Task = require('./Task.model')
const User = require('./User.model')

const Schema = mongoose.Schema

const workspaceSchema = new Schema({
    // array of users who are in this workspace
    title: String,
    statuses: {
        type: [String],
        required: true,
        default: ['open', 'closed']
    },
    users: [User],
    // arr of tasks inside this workspace
    tasks: [Task],
})

module.exports = mongoose.model('Workspace', workspaceSchema)