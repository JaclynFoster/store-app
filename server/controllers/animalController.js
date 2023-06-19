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

const getAllTypes = async (req, res) => {
  try {
    const { animal_id} = req.query;
    const response = await queryInvoke('SELECT * FROM types WHERE ($1::int = ("animal_id") )',[animal_id] )
    res.status(200).send(response.rows)
  } catch (error) {
    console.log("getAllTypes Error: ", error)
    res.sendStatus(500)
  }
}


module.exports = { test, getAllAnimals, getAllTypes}

