const express = require('express');
const mongoose = require('mongoose');

// starting application
const app = express();

// starting the database
mongoose.connect('mongodb://localhost:27017/router-API',{useNewUrlParser:True});

//first route
app.get('/',(req,res) => {

    res.send("Olá Mundo!");
});

app.listen(3001);