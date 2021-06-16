/////////////////////////
// DEPENDENCIES
/////////////////////////
require('dotenv').config()
const express = require('express')
const cors = require ('cors')
// const mongoose = require('mongoose')
const port = process.env.PORT || 8000;
const connectDB = require('./database')

const Task = require('./models/Task.model')
const taskRouter = require('./routes/api/tasks')
const userRouter = require('./routes/api/users')
const workspaceRouter = require('./routes/api/workspaces.js')

/////////////////////////
// The Application Object
/////////////////////////
const app = express()

/////////////////////////
// Database
/////////////////////////
connectDB()
// import mongoose
// const mongoose = require('mongoose')
//tells mongoose what databse to try and connect to. establishes how our backend server communicates with the back end database
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
// //double-check that we connected to mongoose
// mongoose.connection.on('error', () => {
//     console.log('Error connecting to mongoose database...')
// })
// mongoose.connection.once('open', () => {
//     console.log('Connected to mongoose database')
// })

/////////////////////////
// MIDDLEWARE
/////////////////////////
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

/////////////////////////
// API Endpoints/Routers
/////////////////////////
// url endpoints for us to communicate with our API
app.use('/api/tasks', taskRouter)
// app.use('/api/users', userRouter)
// app.use('/api/workspaces', workspaceRouter)

// database like .findById() CRUD operations

// test route that sends some json data to make sure server is working
app.get("/", (req, res) => {
    // set OK status in response
    res.status(200);
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World",
        key: 'value pair!'
    })
})

// used to sync database info with frontend
app.get('/sync', (req, res) => {
    Task.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        } 
    })
})

/////////////////////////
// Listener
/////////////////////////
app.listen(port, () => {
  console.log(`the backend server is running on port ${port}`);
});