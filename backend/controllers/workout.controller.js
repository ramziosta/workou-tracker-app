const workoutSchema = require("../models/workout.schema");
const mongoose = require("mongoose");

// get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await workoutSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts).json({ message: "Success" });
  } catch (err) {
    res.status(400).json({ message: "retrieve all workout falied" });
  }
};

// getsingle workout
const getSingleWorkout = async (req, res) => {
  try {
    //we destructure the object to get the id or any parameters using req.params
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400).json({ message: "invalid id" });
    }
    const workout = await workoutSchema.findById(id);
    if (!workout) {
      return res.status(400).json({ error: "Workout not found" });
    }
    res.status(200).json(workout).json({ message: " successfully" });
  } catch (err) {
    res.status(400).json({ message: "retrieve single workout failed" });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutSchema.create({ title, reps, load });
    res
      .json(workout)
      .status(200)
      .json({ message: "workout successfully created" });
  } catch (err) {
    res.status(400).json({ message: "Workout creation failed" });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400).json({ message: "invalid id" });
    }
    const workout = await workoutSchema.findByIdAndDelete({ _id: id });
    if (!workout) {
      return res.status(400).json({ error: "Workout not found" });
    }
    res.status(200).json(workout).json({ message: " successfully" });
  } catch (err) {
    res.status(400).json({ message: "Workout deletion failed" });
  }
};

// update a workout
const updateWorkout = async (req, res) => {

  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.sendStatus(400).json({ message: "invalid id" });
      }

    const workout = await workoutSchema.findOneAndUpdate(
      { _id: id }, {...req.body}, {new: true});
       if (!workout) {
      return res.status(400).json({ error: "Workout not found" });
    }
    res
      .json(workout)
      .status(200)
      .json({ message: "workout successfully updated" });
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
