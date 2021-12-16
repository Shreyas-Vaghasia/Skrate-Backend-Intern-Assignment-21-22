const express = require("express");
const router = express.Router();
const Meeting = require("../models/meetingModel");

// Get all meetings
router.get("/all", async (req, res) => {
  try {
    const meeting = await Meeting.find();
    res.status(200).json(meeting);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// new meeting
router.post("/new", async (req, res) => {
  const newMeeting = new Meeting({
    uid1: req.body.uid1,
    uid2: req.body.uid2,
    date: req.body.date,
  });

  try {
    const savedMeeting = await newMeeting.save();
    res.json({
      id: savedMeeting._id,
    });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
