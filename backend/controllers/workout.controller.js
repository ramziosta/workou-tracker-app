const workoutSchema = require("../models/workout.schema");
const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await workoutSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ message: "retrieve single workout failed" });
  }
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await workoutSchema.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: "retrieve single workout failed" });
  }
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add to the database
  try {
    const workout = await workoutSchema.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such workout" });
    }

    const workout = await workoutSchema.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such workout" });
    }

    const workout = await workoutSchema.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );

    if (!workout) {
      return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: "Workout update failed" });
  }
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
