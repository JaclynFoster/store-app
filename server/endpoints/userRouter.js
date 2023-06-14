const express = require("express");
const { test } = require("../controllers/userController");
const app = express.Router()

app.get('/test', test)

module.exports = app;