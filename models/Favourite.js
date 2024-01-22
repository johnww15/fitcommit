const { Schema, model } = require("mongoose");

//!to be imported in the future across multiple models
const muscleEnum = ["Chest", "Shoulders", "Back", "Arms", "Legs"];

const favouriteSchema = new Schema(
  {
    exercise: {
      type: String,
      required: true,
    },
    muscle: {
      type: String,
      enum: muscleEnum,
      required: true,
    },
    reps: {
      type: Number,
      default: 10,
      min: 1,
      required: true,
    },
    sets: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },
    //! to consider how to flip between kg and lbs
    weight: {
      type: Number,
      required: true,
    },
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Favourite", favouriteSchema);
