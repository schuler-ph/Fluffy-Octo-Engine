const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
};

// get one workout
const getOneWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete a workout

// update a workout

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
};
