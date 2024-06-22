// we cannot use const app = express() inside here to create routes

const express = require('express')
const Workout = require('../models/workoutModel')

// create a router
const router = express.Router()

// Below is adding request handlers onto the router

// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workouts' })
})

// GET a single workout
// : represents a route parameter whereby :id can change
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single workout' })
})

// POST a new workout
// Workout.create() is asynchronous
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body

    try {
        // Adding a new document to the Workouts collection with the 3 properties
        // Reponse will be the document along with its ID and it is stored in workout object
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        // error has a message property on it
        res.status(400).json({ error: error.message })
    }
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a single workout' })
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a single workout' })
})

// export the router
module.exports = router