const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        dafault: () => new Date()
    },
    exercise: [
        {
            type: String,
            trim: true,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

// WorkoutSchema.method.SOMETHING = () => {
//     this.
// }