const { Schema, model } = require("mongoose");

//!to be imported in the future across multiple models
const muscleEnum = ["Chest", "Shoulders", "Back", "Arms", "Legs"];

const favouriteSchema = new Schema(
  {
    favourite_exercise: {
      type: String,
      required: true,
    },
    favourite_muscle: {
      type: String,
      enum: muscleEnum,
      required: true,
    },
    favourite_reps: {
      type: Number,
      default: 10,
      min: 1,
      required: true,
    },
    favourite_sets: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },
    //! to consider how to flip between kg and lbs
    favourite_weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Favourite", favouriteSchema);
