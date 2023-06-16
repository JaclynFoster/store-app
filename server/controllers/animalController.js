const { queryInvoke } = require('../services/pg')

const test = (req, res) => {
  res.sendStatus(200)
}

const getAllAnimals = async (req, res) => {
  try {
    const response = await queryInvoke('SELECT * FROM animals', [])
    res.status(200).send(response.rows)
  } catch (error) {
    console.log('getAllAnimals query error: ', error)
    res.sendStatus(500)
  }
}


module.exports = { test, getAllAnimals }

