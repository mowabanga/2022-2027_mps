const express = require("express");
const mongoose = require("mongoose");
const Mp = require("./models/mpModel");
require("dotenv").config();

const app = express();
const db = process.env.MONGO_DB;

app.use(express.json());

//routes
app.get("/mps/:constituency", async (req, res) => {
  try {
    const { constituency } = req.params;
    const mps = await Mp.findOne({
      constituency,
    });
    if (!mps) {
      res.status(404).json({ message: "MP not found" });
    } else {
      res.status(200).json(mps);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const mps = await Mp.find({});
    res.status(200).json(mps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/mps", async (req, res) => {
  try {
    const mp = await Mp.create(req.body);
    res.status(200).json(mp);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(db)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port, 3000");
    });
    console.log("Successfully connected to Mongo DB");
  })
  .catch((error) => {
    console.log(error);
  });
