const express = require("express");
const { test, getAllAnimals, getAllTypes} = require("../controllers/animalController");
const app = express.Router()

app.get('/all', getAllAnimals)
app.get('/:type', getAllTypes)

module.exports = app;