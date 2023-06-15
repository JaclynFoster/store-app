const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./endpoints/userRouter')
const animalRouter= require('./endpoints/animalRouter')
const { queryInvoke } = require('./services/pg')
const { createAnimalTable, insertAnimals, alterAnimalsTable, addImagesToTypes } = require('./schema/createTable.js')
require('dotenv').config()
const { SERVER_PORT } = process.env

app.use(express.static(`${__dirname}/../public`))

app.use(express.json())
app.use(cors())
app.use('/animals', animalRouter)
app.use('/user', userRouter)

const sqlSetup = async () => {
  const results = await queryInvoke(addImagesToTypes, ["reptiles", "873949768395849730" ])
  console.log(results)
}
// [
//   {
//       "id": "873949768395784194",
//       "type": "fowl",
//       "image": null
//   },
//   {
//       "id": "873949768395849730",
//       "type": "lizards",
//       "image": null
//   },
//   {
//       "id": "873949768395882498",
//       "type": "bugs",
//       "image": null
//   }
// ]

// sqlSetup()
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`)
})

