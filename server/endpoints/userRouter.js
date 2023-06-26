const express = require("express");
const {  getUser } = require("../controllers/userController");
const app = express.Router()

app.get('/user', getUser)

module.exports = app;