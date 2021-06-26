const mongoose = require("mongoose");
const Task = require('./Task.model')
const User = require('./User.model')

const Schema = mongoose.Schema

const workspaceSchema = new Schema({
    // array of users who are in this workspace
    title: String,
    // statuses not functional yet
    // statuses: {
    //     type: [String],
    //     required: true,
    //     default: ['open', 'closed']
    // },
    //arr of tasks inside this workspace
    userId: [String],
    tasks: [{
        type: Schema.Types.ObjectId,
        default: void 0,
        ref:"Task"
    }]
    
})

module.exports = mongoose.model('Workspace', workspaceSchema)