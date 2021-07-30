//const express = require("express"); 예전문법
import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  //console.log("I'm in the middle!");
  console.log(`Someone is going to: ${req.url}`);
  //return res.send("I have the power now!");
  next();
};

const handleHome = (req, res) => {
  //   console.log("Somebody is trying to go home.");
  return res.end();
  //return res.send("<h1>I still love you.</h1>");
};
const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

//console.log("I'm good!!!!!!");

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
