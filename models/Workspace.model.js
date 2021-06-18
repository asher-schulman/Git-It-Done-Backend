const mongoose = require("mongoose");
const Task = require('./Task.model')
const User = require('./User.model')

const Schema = mongoose.Schema

const workspaceSchema = new Schema({
    // array of users who are in this workspace
    title: String,
    statuses: [{
        type: String,
        required: true,
        default: ['open', 'closed']
    }],
    users: [{
        type: Schema.ObjectId,
        ref: User
    }],
    // arr of tasks inside this workspace
    tasks: [{
        type: Schema.ObjectId,
        ref: Task
    }],
})

module.exports = mongoose.model('Workspace', workspaceSchema)

// {
    // "title": "Test Workspace",
    // "statuses": ["pending", "started"],
    // "googleId": "116253708768141731362",
    // "users": [{
        // "_id": "60cbd7fd8ab9660f6ab68367",
        // "googleId": "116253708768141731362",
        // "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5ZmUyYTdiNjc5NTIzOTYwNmNhMGE3NTA3OTRhN2JkOWZkOTU5NjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTc0MTA2MTA3NDAxLWx2M2VyZ21oMmM5OWpuYTkxb204bXR2aWozYW0yYjVsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTc0MTA2MTA3NDAxLWx2M2VyZ21oMmM5OWpuYTkxb204bXR2aWozYW0yYjVsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2MjUzNzA4NzY4MTQxNzMxMzYyIiwiZW1haWwiOiJhc2hlci5zY2h1bG1hbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InNCbGxGZVRuX3lPTU1LX1hTZ25SUmciLCJuYW1lIjoiQXNoZXIgU2NodWxtYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeHEzLXlXZEl5aWRhYnI2UGUtcjNjblhVcmozRWJ5WHVHdFJRa2I9czk2LWMiLCJnaXZlbl9uYW1lIjoiQXNoZXIiLCJmYW1pbHlfbmFtZSI6IlNjaHVsbWFuIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MjM5NzE2NTQsImV4cCI6MTYyMzk3NTI1NCwianRpIjoiYTdiY2E1NzY4ZWVmMDMzN2EwNGM4ZDU0ZWQyZGQxMzVhZGRkNTJlMiJ9.QhzTREDJoVVexbayueRe_AohZRqYcbdi5jpMp43XoappcRqNG1zZxiKn_oBpRoxgD1_m0RldNUCizBlEhfx37WsL5oTm8lD0i7x_CHnLHodb3_QInzUZ8hg9-rsaoHDT1pvqBzHf4kGoottDYEkpWOShslAYPZkxASQgSVt-9lRDL7fch2xreWsapzG1EvOwhzFsTGLKqCogHUaelvfL0ZvSReX2asdCa8oiejtl5hDXohpZCfGVMQYZW_ZAuzfYK__zeoad1LOqpu8RNt8Nc8kvbUOPLPW5LUR37WmnzthjHFRF6Df75GcK3KAEx4a-O-MH4fsulo4XraIYNa9m_Q",
        // "createdAt": "2021-06-17T23:17:17.005Z",
        // "__v": 0
    // }],
    // "tasks": [{
        // "title": "Test Title2",
        // "description": "lorum ispum yada yada",
        // "status": "testStatus"
        // }]
// }