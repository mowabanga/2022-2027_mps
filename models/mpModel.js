const mongoose = require("mongoose");

const mpSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  county: {
    type: String,
    required: false,
  },
  constituency: {
    type: String,
    required: false,
  },
  party: {
    type: String,
    required: false,
  },

  image: {
    type: String,
    required: false,
  },
});

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    county: {
      type: String,
      required: [true, "Please enter your current county"],
    },
  },
  { timestamps: true }
);

const mp = mongoose.model("Mp", mpSchema);

module.exports = mp;
