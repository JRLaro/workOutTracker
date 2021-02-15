const router = require("express").Router();
const Workout = require("../models/workout")
const path = require("path");
const { sort } = require("methods");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate()
.addFields({ totalDuration: { $sum: "$exercises.duration" } })
        .then((err, data) => {
            if (err) return res.json(err)
            return res.json(data)
    // Workout.find({}).then((data) => {
    //     return res.json(data).catch((err) => {
    //         return res.json(err)
    //     });
    });
});


router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        {
          _id: req.params.id  
        },
        {
            $push: {
            exercises: req.body
        }
        },
        {
            new: true
        }
    ).then((data) => {
        res.json(data)
    }).catch((err) => {
             res.json(err)
        });
    });

router.post("/api/workouts", (req, res) => {
    // console.log(req.body);
    Workout.create({}).then((data) => {
        res.json(data)
    }).catch((err) => {
             res.json(err)
        });
    });

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate()
        .sort({ day: -1 })
        .limit(7)
        .addFields({ totalDuration: { $sum: "$exercises.duration" } })
        .then((err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        });
    // Workout.find({}).sort({day: -1})
    //     .limit(7)
    //     .then((data) => {
    //     res.json(data).catch((err) => {
    //         res.json(err)
    //     });
    });

// aggregate.addFields({ salary_k: { $divide: [ "$salary", 1000 ] } });


    module.exports = router;