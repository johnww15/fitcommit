const express = require("express");
const router = express.Router();

const { calendarEntryCreate } = require("../controllers/calendarController");

//user router functions for data queries
router.post("/entry/:entryId", calendarEntryCreate);

module.exports = router;
