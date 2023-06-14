const express = require('express')
const cors = require('cors')
const app = express()
const { queryInvoke } = require('./services/pg')
const { createAnimalTable, insertAnimals } = require('./schema/createTable.js')
require('dotenv').config()
const { SERVER_PORT } = process.env

app.use(express.static(`${__dirname}/../public`))

app.use(express.json())
app.use(cors())

const sqlSetup = async () => {
  const results = await queryInvoke('SELECT * FROM animals', [])
  console.log(results)
}
// sqlSetup()
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`)
})

