const express = require("express");
const workoutSchema = require("../models/workout.schema");
const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ message: "all workout" });
});
//get single workout
router.get("/:id", (req, res) => {
  res.json({ message: "get a single workout by id" });
});
//post new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutSchema.create({ title, reps, load });
    res
      .json(workout)
      .status(200)
      .json({ message: "success submiting workout data" });
  } catch (err) {
    res.status(400).json({ message: "error creating workout" });
  }
});
//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "delete a workout by id" });
});

//update workout
router.patch("/:id", (req, res) => {
  res.json({ message: "update a workout by id" });
});

module.exports = router;
