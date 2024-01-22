const express = require("express");
const router = express.Router();

const {
  favouriteIndex,
  favouriteCreate,
  favouriteDelete,
} = require("../controllers/favouritesController");

//user router functions for data queries
router.get("/", favouriteIndex);
router.post("/user/:userId", favouriteCreate);
router.delete("/:favouriteId", favouriteDelete);

module.exports = router;
