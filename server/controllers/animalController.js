const { queryInvoke } = require('../services/pg')

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
    const { type } = req.params
    const response = await queryInvoke(
      `SELECT * FROM types 
    JOIN animals ON id = types.animal_id
    WHERE animals.type = $1`,
      [type]
    )
    res.status(200).send(response.rows)
  } catch (error) {
    console.log('getAllTypes Error: ', error)
    res.sendStatus(500)
  }
}

const getAllBreeds = async (req, res) => {
  try {
    const { breed } = req.params
    console.log('req.params', req.params)
    console.log('breed_name:', breed)
    const response = await queryInvoke(
      `SELECT * FROM breeds
    JOIN types ON types.type_id = breeds.type_id
    WHERE types.type_name = $1
    `,
      [breed]
    )
    console.log('getAllBreeds Response: ', response.rows)
    res.status(200).send(response.rows)
  } catch (error) {
    console.log('getAllBreeds Error: ', error)
    res.sendStatus(500)
  }
}

const getSearch = async (req, res) => {
  try {
    const { searchText } = req.query
    console.log('searchText:', searchText)
    const response = await queryInvoke(
      `SELECT * FROM breeds
      INNER JOIN types ON types.type_id = breeds.type_id
       INNER JOIN animals ON animals.id = breeds.animal_id
      WHERE (breeds.breed_name ILIKE '%${searchText}%') OR
     (types.type_name ILIKE '%${searchText}%') OR 
     (animals.type ILIKE '%${searchText}%')
       `,
      []
    )
    console.log('GetSearch Results:', response.rows.length)
    res.status(200).send(response.rows)
  } catch (error) {
    console.log('Error on getSearch', error)
    res.sendStatus(500)
  }
}

module.exports = { getAllAnimals, getAllTypes, getAllBreeds, getSearch }



