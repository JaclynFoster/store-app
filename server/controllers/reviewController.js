const { queryInvoke } = require('../services/pg')

const getReviews = async (req, res) => {
  try {
    const response = await queryInvoke(
      `SELECT * FROM reviews ORDER BY review_id DESC LIMIT 3`,
      []
    )
    res.status(200).send(response.rows)
  } catch (error) {
    console.log('getReviews query error: ', error)
    res.sendStatus(500)
  }
}

const createReview = async (req, res) => {
  const { rating, name, message } = req.body
  try {
    const response = await queryInvoke(
      `INSERT INTO reviews (rating, name, message)
             VALUES ($1, $2, $3)`,
      [rating, name, message]
    )
    console.log('createReview:', response)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error on createReview', error)
    res.sendStatus(500)
  }
}

module.exports = { getReviews, createReview }

