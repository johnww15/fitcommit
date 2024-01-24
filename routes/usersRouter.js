// const express = require("express");
// const router = express.Router();

// const {
//   userLogin,
//   userSignup,
//   userIndex,
// } = require("../controllers/usersController");

// //user router functions for login/signups
// router.post("/login", userLogin); //check if user exists in database and provide JWT token
// router.post("/", userSignup); //user create

// //user router functions for data queries
// router.get("/", userIndex);

// module.exports = router;

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/signup", usersController.create);
router.post("/dashboard", usersController.login);

module.exports = router;
