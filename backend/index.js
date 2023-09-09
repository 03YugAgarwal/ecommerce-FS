// Imports
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const connectDB = require('./database')

// Variables
const PORT = 3000

// Routes
const userRoute = require('./routes/user')

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/user',userRoute)


app.listen(PORT, ()=> {
    console.log(`Server started at http://localhost:${PORT}`);
    connectDB()
})