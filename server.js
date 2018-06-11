const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static("public"));

mongoose.connect("")