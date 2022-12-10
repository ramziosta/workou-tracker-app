const express = require("express");
const {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workout.controller");

const router = express.Router();

// get all workouts
router.get("/", getAllWorkouts);

//get single workout
router.get("/:id", getSingleWorkout);

//post new workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update workout
router.patch("/:id", updateWorkout);

module.exports = router;
