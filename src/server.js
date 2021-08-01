//const express = require("express"); 예전문법
import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  //console.log("I'm in the middle!");
  console.log(`${req.method} ${req.url}`);
  //return res.send("I have the power now!");
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  //   console.log("Somebody is trying to go home.");
  //return res.end();
  return res.send("I love middlewares");
};
// const handleLogin = (req, res) => {
//   return res.send({ message: "Login here." });
// };
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

//console.log("I'm good!!!!!!");
app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
//app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
