const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    //{} is to get all the documents
    // -1 means descending order. i.e. newest ones at the top
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    // this will contain all the workout documents as an array
    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    // all the route parameters are stored on a params property
    const { id } = req.params

    // it checks whether the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findById(id)

    // if the workout document doesn't exist, workout constant will be null
    if (!workout) {
        // return is used so that it will not jump after if block if the condition is satisfied
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    try {
        // Adding a new document to the Workouts collection with the 3 properties
        // Reponse will be the document along with its ID and it is stored in workout object
        // Workout.create() is asynchronous
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        // error has a message property on it
        res.status(400).json({ error: error.message })
    }
}


// delete a workout


// update a workout


// export the function
module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}