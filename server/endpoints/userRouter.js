const express = require('express')
const { getUser, createUser } = require('../controllers/userController')
const app = express.Router()

app.get('/login', getUser)
app.post('/signup', createUser)

module.exports = app
