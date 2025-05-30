const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/manajemen_app");
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection error:", error);
  }
}
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to manajemen App");
});

app.listen(3000, () => {
  try {
    console.log("App listening on http://127.0.0.1:3000");
  } catch (error) {
    console.error(error.message);
  }
});
