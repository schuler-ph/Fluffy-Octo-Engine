const express = require("express");
const Workout = require("../models/workoutModel");
const {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//* GET all
router.get("/", getAllWorkouts);

//* GET one
router.get("/:id", getOneWorkout);

//= POST
router.post("/", createWorkout);

//! DELETE
router.delete("/:id", (req, res) => {
    res.json({ message: "Delete workout" });
});

//? UPDATE
router.patch("/:id", (req, res) => {
    res.json({ message: "Update workout" });
});

module.exports = router;
