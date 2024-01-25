const express = require("express");
const router = express.Router();

const {
  planIndex,
  planCreate,
  planDelete,
  planIndexById,
} = require("../controllers/plansController");

//user router functions for data queries
router.get("/", planIndex);
router.get("/user/:userId", planIndexById);
router.post("/user/:userId", planCreate);
router.delete("/:planId", planDelete);

module.exports = router;
