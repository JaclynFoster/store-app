const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./endpoints/userRouter')
const animalRouter= require('./endpoints/animalRouter')
const { queryInvoke } = require('./services/pg')
const { createAnimalTable, insertAnimals, alterAnimalsTable, addImagesToTypes, createBreedTable, insertBreeds, alterTypesTable, alterTypesColumn, createBreedsTable, createUserTable } = require('./schema/createTable.js')
require('dotenv').config()
const { SERVER_PORT } = process.env

app.use(express.static(`${__dirname}/../public`))

app.use(express.json())
app.use(cors())
app.use('/animals', animalRouter)
app.use('/login', userRouter)

const sqlSetup = async () => {
  const results = await queryInvoke(createUserTable, [])
  console.log(results)
}


// sqlSetup()
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`)
})

