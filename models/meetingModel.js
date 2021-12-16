const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  uid1: {
    type: String,
    required: true,
  },
  uid2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Meeting", meetingSchema);
