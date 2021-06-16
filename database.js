require('dotenv').config()
const mongoose = require('mongoose')
const DB = process.env.DATABASE_URL

module.exports = connectDB = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    //double-check that we connected to mongoose
    mongoose.connection.once('open', () => {
        console.log('Connected to mongoose database')
    })
    mongoose.connection.on('error', () => {
        console.log('Error connecting to mongoose database...')
    })  
}

// const connectDB = async () => {
//     try {
//         await mongoose.connect(DB, {
//             useNewUrlParser: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         })
//         //double-check that we connected to mongoose
//         mongoose.connection.once('open', () => {
//             console.log('Connected to mongoose database')
//         })
//         mongoose.connection.on('error', () => {
//             console.log('Error connecting to mongoose database...')
//         })
//     }
//     catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// }

// module.exports = connectDB()