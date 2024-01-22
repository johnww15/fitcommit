const { Schema, model } = require("mongoose");

const calendarSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  //reference to user.js file and userSchema
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  //reference to entry.js file and entrySchema
  entry: [
    {
      type: Schema.Types.ObjectId,
      ref: "Entry",
    },
  ],
  //reference to favourite.js and favouriteSchema
  favourite: [
    {
      type: Schema.Types.ObjectId,
      ref: "Favourite",
    },
  ],
});

module.exports = model("Calendar", calendarSchema);
