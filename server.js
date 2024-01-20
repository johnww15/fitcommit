//* require block
require("dotenv").config();
require("./config/database");

const express = require("express");
const path = require("path");

const usersRouter = require("./routes/usersRouter");
const jwt = require("jsonwebtoken");

//express app
const app = express();

//* middleware block
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

const checkToken = (req, res, next) => {
  const token = req.get("Authorization")?.split(" ")?.[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const userId = decoded.user._id;
    res.locals.userId = userId;
    // storeId(req, res);
    next();
  } catch (error) {
    res.status(403).json({ msg: "wrong token" });
  }
};
app.use("/api/users", usersRouter);

//* routes block

app.get("/api/orders", checkToken, (req, res) => {
  res.json({ orders: res.locals.userId });
});

app.get("/api/secret", checkToken, (req, res) => {
  res.json({ orders: req.name });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//* listen block
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
