require("dotenv").config();

const express = require("express");
// import express from "express" another way
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  res.send("<h1>Login into chai aur code </h1>");
});

app.get("/chai", (res, req) => {
  res.send("I love chai");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at port ${port}`);
});
