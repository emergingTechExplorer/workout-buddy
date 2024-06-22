require('dotenv').config()

const express = require('express')

// express app
const app = express()

// () function will fire for every request that comes in
// this is a middleware which runs between getting in request and sending out response
// next is used so that it can jump to the reponse
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
})

// listen for requests
// a function will be fired when it can listen
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})
