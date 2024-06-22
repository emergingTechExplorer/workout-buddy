const mongoose = require('mongoose')

// create a new Schema
const Schema = mongoose.Schema

// The first argument describes how the schema looks
// second argument will create a timestamp when creating a new property or updating a property
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })


// This will pluralize Workout to Workouts to make a collection automatically
module.exports = mongoose.model('Workout', workoutSchema)