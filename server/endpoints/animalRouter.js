const express = require('express')
const {
  test,
  getAllAnimals,
  getAllTypes,
  getAllBreeds,
  getSearch
} = require('../controllers/animalController')
const app = express.Router()

app.get('/all', getAllAnimals)
app.get('/getSearch', getSearch)
app.get('/:type', getAllTypes)
app.get('/:type/:breed', getAllBreeds)

module.exports = app
