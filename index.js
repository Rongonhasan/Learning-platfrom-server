
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const coursesCollection = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/courses", (req, res) => {
  res.send(coursesCollection);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const item = coursesCollection?.find((p) => p.id == id);
  if (!item) {
    res.send("khuje pai nai");
  }
  res.send(item);
});

app.listen(Port, () => {
    console.log("server is running", Port);
  });
  
  module.exports = app;