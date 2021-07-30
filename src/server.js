//const express = require("express"); 예전문법
import express from "express";
const PORT = 4000;
const app = express();

//console.log("I'm good!!!!!!");

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
