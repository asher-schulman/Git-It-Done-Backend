const mongoose = require("mongoose");
const User = require('./User.model')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    // unique id
    taskID: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    // parentWorkspaceID: {
    //     type: String,
    //     required: true
    // },

    // object holding created info
    info: {
        // id of the workspace this task belongs to
        parentWorkspaceID: {
            type: String,
            required: true
        },
        createdBy: {User},
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
})

module.exports = mongoose.model('Task', taskSchema)