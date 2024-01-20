const { Schema, model } = require("mongoose");

//!to be imported in the future across multiple models
const muscleEnum = ["Chest", "Shoulders", "Back", "Arms", "Legs"];

//Create function to validate given date from input before updating schema
const DateValidator = function (givenDate) {
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0); //Preset time to midnight to only compare date and not time
  const nextDate = new Date(todaysDate);
  nextDate.setDate(todaysDate.getDate() + 1);

  //if given date does not meet required condition, return an error message instead
  if (givenDate < nextDate) {
    throw new Error("Date must be at least the day after today");
  }
};

const entrySchema = new Schema(
  {
    entry_date: {
      type: Date,
      //include function to have a default value of tomorrow's date
      default: () => {
        const defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 1);
        return defaultDate;
      },
      //include validation to execute date validating function when updating schema from new input
      validate: {
        validator: DateValidator,
        message:
          "this is a message that is sent when given date has already passed",
      },
      required: true,
    },
    entry_exercise: {
      type: String,
      required: true,
    },
    entry_muscle: {
      type: String,
      enum: muscleEnum,
      required: true,
    },
    entry_reps: {
      type: Number,
      default: 10,
      min: 1,
      required: true,
    },
    entry_sets: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },
    //! to consider how to flip between kg and lbs
    entry_weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Entry", entrySchema);
