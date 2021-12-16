const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// @route   POST /users/new
router.post("/new", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ UID: savedUser._id });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// @route   GET /all
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({}, { _id: 1 });

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;
