const mongoose = require("mongoose");

const workoutSchemaModel = mongoose.Schema;

const workoutSchema = new workoutSchemaModel(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("workoutData", workoutSchema);
