const { Schema, model } = require("mongoose");

const calendarSchema = new Schema({
  calendar_date: {
    type: Date,
    required: true,
  },
  //reference to entry.js file and entrySchema
  calendar_entry: [
    {
      type: Schema.Types.ObjectId,
      ref: "Entry",
    },
  ],
  //reference to favourite.js and favouriteSchema
  calendar_favourite: [
    {
      type: Schema.Types.ObjectId,
      ref: "Favourite",
    },
  ],
});

module.exports = model("Calendar", calendarSchema);
