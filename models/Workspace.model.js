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
    // userId: [{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    //arr of tasks inside this workspace
    userId: [String],
    tasks: [{type:mongoose.Schema.Types.ObjectId,ref:"Task"}],
})

module.exports = mongoose.model('Workspace', workspaceSchema)