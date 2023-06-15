const express = require("express");
const { test, getAllAnimals } = require("../controllers/animalController");
const app = express.Router()

app.get('/types', getAllAnimals)

module.exports = app;