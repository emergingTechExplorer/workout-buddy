// we cannot use const app = express() inside here to create routes
const express = require('express')
// {} are used to destructure
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// create a router
const router = express.Router()

// Below is adding request handlers onto the router

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
// : represents a route parameter whereby :id can change
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

// export the router
module.exports = router