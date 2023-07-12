const express = require("express");
const { test, getAllAnimals, getAllTypes, getAllBreeds, getSearch} = require("../controllers/animalController");
const app = express.Router()

app.get('/all', getAllAnimals)
app.get('/:type', getAllTypes)
app.get('/:type/:breed', getAllBreeds)
app.get('/', getSearch)

module.exports = app;