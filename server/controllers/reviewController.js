const { queryInvoke } = require('../services/pg')

const getReviews = async (req, res) => {
  try {
    const response = await queryInvoke(`SELECT * FROM reviews`, [])
    res.status(200).send(response.rows)
  } catch (error) {
    console.log('getReviews query error: ', error)
    res.sendStatus(500)
  }
}

const createReview = async (req, res) => {
  const { name, message } = req.body
  try {
    const response = await queryInvoke(
      `INSERT INTO reviews (name, message)
             VALUES ($1, $2)`,
      [name, message]
    )
    res.status(200).send(response)
  } catch (error) {
    console.log('Error on createReview', error)
    res.sendStatus(500)
  }
}

module.exports = { getReviews, createReview }
