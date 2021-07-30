//const express = require("express"); 예전문법
import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  //   console.log("Somebody is trying to go home.");
  //return res.end();
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};

//console.log("I'm good!!!!!!");

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
