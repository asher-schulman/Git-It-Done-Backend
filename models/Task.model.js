const mongoose = require("mongoose");
const User = require('./User.model')
const Workspace = require('./Workspace.model')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: 'open'
    },
    // flags not functional yet
    // flags: [String],
    userId: {
        type: String
    },
    workspaceId: String,
    //workspace: {type:mongoose.Schema.Types.ObjectId,ref:"Workspace"},
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps:true})

module.exports = mongoose.model('Task', taskSchema)