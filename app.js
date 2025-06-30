const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  res.status(201).json({ email, password });
});

app.post("/login", (req, res) => {
  res.status(200).json({ message: "user logged in" });
});

// routes not found error
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Broken" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
