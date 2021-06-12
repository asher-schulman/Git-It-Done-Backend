/////////////////////////
// DEPENDENCIES
/////////////////////////
require('dotenv').config()
const express = require('express')
/////////////////////////
// The Application Object
/////////////////////////
const app = express()
/////////////////////////
// MIDDLEWARE
/////////////////////////
app.use(express.json())
// import mongoose
const mongoose = require('mongoose')
//tells mongoose what databse to try and connect to. establishes how our backend server communicates with the back end database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
//double-check that we connected to mongoose
mongoose.connection.on('error', () => {
    console.log('Error connecting to mongoose database...')
})
mongoose.connection.once('open', () => {
    console.log('Connected to mongoose database')
})

/////////////////////////
// The Data
/////////////////////////

// maybe something with databse info or connecting here?

/////////////////////////
// Routes
/////////////////////////

// database like .findById() CRUD operations

// test route that sends some json data to make sure server is working
app.get("/test", (req, res) => {
    //res.json let's us send a response as JSON data
    res.json({
        response: "Hello World",
        key: 'value pair!'
    })
})
/////////////////////////
// Listener
/////////////////////////
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});