const jwt = require('jsonwebtoken')
const { queryInvoke } = require('../services/pg')
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

const getUser = async (req, res) => {
  const { username, password } = req.query
  console.log('query', req.query)
  try {
    const response = await queryInvoke(
      `SELECT * FROM users WHERE username = $1 AND password = $2`,
      [username, password]
    )
    console.log('response:', response)
    if (response.rows.length) {
      let token = generateToken(req.body)
      console.log('Token:', token)
      // let valid = jwt.verify(token, SECRET)
      // if (valid) {
      res.status(200).send({ token, data: response.rows[0] })

      // }
    } else {
      res.status(401).send('No user found with these credentials.')
    }
  } catch (error) {
    console.log('getUser Error:', error)
    res.sendStatus(500)
  }
}

const createUser = async (req, res) => {
  const {
    username,
    password,
    email,
    first_name,
    last_name,
    address,
    city,
    state,
    zipcode,
    phone
  } = req.body

  console.log('My params: ', req.params)
  try {
    const response = await queryInvoke(
      `INSERT INTO users (username, password, email, first_name, last_name, address, city, state, zipcode, phone)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [
        username,
        password,
        email,
        first_name,
        last_name,
        address,
        city,
        state,
        zipcode,
        phone
      ]
    )
   
    res.status(200).send(response)
  } catch (error) {
    console.log('Error createUser: ', error)
    res.sendStatus(500)
  }
}

const updateUser = async (req, res) => {
  const {
    address,
    city,
    state,
    zipcode,
    username,
    password,
    first_name,
    last_name,
    email,
    phone
  } = req.body
  const { id } = req.params
  console.log("my params:", req.params)
  try {
    const response = await queryInvoke(
      `UPDATE users SET address = $1, city = $2, state = $3, zipcode = $4, username = $5, password = $6, first_name = $7, last_name = $8, email = $9, phone = $10
        WHERE id = ${id}
        `,
      [
        address,
        city,
        state,
        zipcode,
        username,
        password,
        first_name,
        last_name,
        email,
        phone,
      ]
    )
    console.log("Update User Response", response)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error updateUser: ', error)
    res.sendStatus(500)
  }
}


// const validateToken = async (req, res) => {
//   let token = req.get('Authorization')
//   let valid = jwt.verify(token, SECRET)
//   if (valid) {
//     res.status(200).send('Success.Token Valid')
//   } else {
//     res.status(400).send('Token invalid.')
//   }
//   console.log('Validate Token Body', req.body)
// }

module.exports = { getUser, createUser, updateUser }



