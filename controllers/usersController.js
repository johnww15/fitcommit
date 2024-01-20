const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10 days" });
}

// login a user
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user === null) {
      res.status(401).json({ msg: "user not found" });
      return;
    }

    // if (user.password !== password) {
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      res.status(401).json({ msg: "wrong password" });
      return;
    }

    const token = createToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// signup a user
const userSignup = async (req, res) => {
  const data = req.body;

  if (data.password.trim().length < 3) {
    const error = { msg: "server password too short" };
    res.status(400).json(error);
    return;
  }

  try {
    const user = await User.userSignup(data);
    const token = createToken(user);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//for data retrievals and json files

//include error handling to trigger if there is an error during data query
const userIndex = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (error) {
    console.error("error in userIndex function in usersController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  userLogin,
  userSignup,
  userIndex,
};
