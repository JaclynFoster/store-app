const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.SECRET

const generateToken = credentials => {
  return jwt.sign(
    {
      username: credentials.username,
      password: credentials.password
    },
    SECRET,
    {
      expiresIn: '24 hours'
    }
  )
}

const createToken = async (req, res) => {
  console.log('createToken', req.body)
  let token = generateToken(req.body)
  res.status(200).send(token)
}

const validateToken = async (req, res) => {
  let token = req.get('Authorization')
  let valid = jwt.verify(token, SECRET)
  if (valid) {
    res.status(200).send('Success.Token Valid')
  } else {
    res.status(400).send('Token invalid.')
  }
  console.log('Validate Token Body', req.body)
}

module.exports = { createToken, validateToken }
