const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./endpoints/userRouter')
const animalRouter= require('./endpoints/animalRouter')
const { queryInvoke } = require('./services/pg')
const { createAnimalTable, insertAnimals, alterAnimalsTable, addImagesToTypes, createBreedTable, insertBreeds, alterTypesTable, alterTypesColumn, createBreedsTable, createUserTable, insertUser, createCartTable, updateDuckType } = require('./schema/createTable.js')
const {getUser, createUser, updateUser} = require('./controllers/userController')
const { SERVER_PORT } = process.env
require('dotenv').config()

app.use(express.static(`${__dirname}/../public`))

app.use(express.json())
app.use(cors())
app.use('/animals', animalRouter)
app.get('/getUser', getUser)
app.put('/updateUser:id', updateUser)

app.post('/createUser', createUser)

const sqlSetup = async () => {
  const results = await queryInvoke(updateDuckType, [])
  console.log(results)
}


// sqlSetup()
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`)
})

