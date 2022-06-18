const express = require("express");

const router = express.Router();

//* GET all
router.get("/", (req, res) => {
    res.json({ message: "Get all workouts" });
});

//* GET one
router.get("/:id", (req, res) => {
    res.json({ message: "Get workout" });
});

//= POST
router.post("/", (req, res) => {
    res.json({ message: "Post workout" });
});

//! DELETE
router.delete("/:id", (req, res) => {
    res.json({ message: "Delete workout" });
});

//? UPDATE
router.patch("/:id", (req, res) => {
    res.json({ message: "Update workout" });
});

module.exports = router;
