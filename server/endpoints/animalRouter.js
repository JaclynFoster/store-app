const express = require("express");
const { test, getAllAnimals } = require("../controllers/animalController");
const app = express.Router()

app.get('/types', getAllAnimals)
app.get('/breeds')

module.exports = app;