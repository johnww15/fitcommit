const Calendar = require("../models/Calendar");
const Entry = require("../models/Entry");

//function to create an entry and connect it with calendar data
const calendarEntryCreate = async (req, res) => {
  const { entryId } = req.params;
  try {
    const calendarEntry = await Entry.findbyId(entryId);

    res.json({ calendarEntry });
  } catch (error) {
    console.error(
      "error in calendarIndex function in calendarController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  calendarEntryCreate,
};
