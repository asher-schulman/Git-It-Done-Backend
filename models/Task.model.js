const mongoose = require("mongoose");
const User = require('./User.model')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    categories: [String],
    createdBy: {
        type: Schema.ObjectId,
        ref: User
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', taskSchema)