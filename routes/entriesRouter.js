const express = require("express");
const router = express.Router();

const { entryIndex, entryCreate, entryDelete } = require("../controllers/entriesController");

//user router functions for data queries
router.get("/", entryIndex);
router.post("/user/:userId", entryCreate);
router.delete("/:entryId", entryDelete);

module.exports = router;
