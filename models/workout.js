const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter the type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of your exercise"
            },
            duration: {
                type: Number,
                required: "Please enter a valid duration for your exercise"
            },
            weight: {
                type: Number,
                required: "Please enter a valid weight for your exercise"
            },
            reps: {
                type: Number,
                required: "Please enter a valid rep for your exercise"
            },
            sets: {
                type: Number,
                required: "Please enter a valid set for your exercise"
            },
            distance: {
                type: Number, 
                required: "Pkease enter a valid distance for your exercise"
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;