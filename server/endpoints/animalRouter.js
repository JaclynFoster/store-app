const express = require("express");
const { test } = require("../controllers/animalController");
const app = express.Router()

app.get('/all', test)

module.exports = app;