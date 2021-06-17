require('dotenv').config()
const mongoose = require('mongoose')
const DB = process.env.DATABASE_URL

const connectDB = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    //double-check that we connected to mongoose
    mongoose.connection
        .on('open', () => console.log('Connected to mongoose database'))
        .on('close', () => console.log('Disconnected to mongoose database'))
        .on('error', () => console.log('Error connecting to mongoose database...'))
}

const testFunction = () => {
    console.log('hello world')
}

const testConstant = {69: 'nice'}

module.exports = {
    connectDB: connectDB,
    testFunction: testFunction,
    testConstant: testConstant
}