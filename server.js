const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// starting application
const app = express();
app.use(express.json());
app.use(cors());

// starting the database
mongoose.connect(
    "mongodb://localhost:27017/router-API",
    {useNewUrlParser:true}
);
requireDir("./src/models");


//route
app.use("/api", require("./src/router"));

app.listen(3001);