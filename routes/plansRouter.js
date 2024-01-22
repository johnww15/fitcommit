const express = require("express");
const router = express.Router();

const {
  planIndex,
  planCreate,
  planDelete,
} = require("../controllers/plansController");

//user router functions for data queries
router.get("/", planIndex);
router.post("/user/:userId", planCreate);
router.delete("/:planId", planDelete);

module.exports = router;
