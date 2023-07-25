const serverless = require('serverless-http');
const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./endpoints/userRouter')
const animalRouter = require('./endpoints/animalRouter')
const { queryInvoke } = require('./services/pg')
const {
  createContactTable,
  createReviewTable,
  createAnimalTable,
  insertAnimals,
  alterAnimalsTable,
  alterReviewsTable,
  addImagesToTypes,
  createBreedTable,
  insertBreeds,
  alterTypesTable,
  alterTypesColumn,
  createBreedsTable,
  createUserTable,
  insertUser,
  createCartTable,
  updateDuckType,
  updateReviews,
  updateRunnerDucks,
  updateCayugaDucks,
  updateChickens
} = require('./schema/createTable.js')
const {
  getUser,
  createUser,
  updateUser
} = require('./controllers/userController')
const {getReviews, createReview} = require('./controllers/reviewController')
const {contactRequest} = require('./controllers/contactController')
const { SERVER_PORT } = process.env
const session = require('express-session')
const { encryptPassword } = require('./authentication')
require('dotenv').config()

app.use(express.static(`${__dirname}/../public`))

app.use(express.json())
app.use(cors())

app.use(
  cors({
    exposedHeaders: ['set-cookie'],
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1',
      'http://104.142.122.231'
    ]
  })
)

app.use(
  session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 10
    }
  })
)

app.set('trust proxy', 1)

app.use('/animals', animalRouter)
app.get('/getUser', getUser)
app.get('/getReviews', getReviews)
app.put('/updateUser:id', updateUser)

app.post('/createUser', createUser)
app.post('/createReview', createReview)
app.post('/contactRequest', contactRequest)

const sqlSetup = async () => {
  const results = await queryInvoke(updateDuckType, [])
  console.log("done", results)
}

const updatePassword = async (password, id) => {
  const hashPass = encryptPassword(password)
  const response = await queryInvoke(`UPDATE users SET password = $1 WHERE id = $2`, [hashPass, id ])
  return response
}

module.exports.handler = serverless(app);

// sqlSetup()
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`)
})


