require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// This is a middleware
// For any request that comes in, it looks if there is a body to the request (some data sending to server)
// If it does, it passes it and attaches it to the request object, so that we can access it 
// in the request handler as req.body. This is mainly for post and patch requests
app.use(express.json())

// (req, res, next) function will fire for every request that comes in
// this is a middleware which runs between getting in request and sending out response
// next is used so that it can jump to the reponse
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// this is to test the api
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
// This is asynchronous in nature and takes a little bit of time and therefore it returns a promise
// .then will fire a function when its complete.
// .catch will catch any errors such as URI is incorrect or username/password is not correct
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        // a function will be fired when it can listen
        // we dont want to accept/ listen for requests until we connect to the database
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


