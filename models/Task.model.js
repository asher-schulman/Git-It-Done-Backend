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
    // id of the workspace this task belongs to
    parentWorkspaceID: {
        type: String,
        required: true
    },
    // fill in with User model for who created this task
    // createdBy: {User},
    createdBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // object holding created info
    // info: {
    //     // id of the workspace this task belongs to
    //     parentWorkspaceID: {
    //         type: String,
    //         required: true
    //     },
    //     createdBy: {User},
    //     createdAt: {
    //         type: Date,
    //         default: Date.now
    //     },
    // }
})

module.exports = mongoose.model('Task', taskSchema)