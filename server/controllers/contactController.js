const { queryInvoke } = require('../services/pg')

const contactRequest = async (req, res) => {
  const { contact_name, contact_email, contact_message } = req.body
  try {
    const response = await queryInvoke(
      `INSERT INTO contact (contact_name, contact_email, contact_message)
    VALUES ($1, $2, $3)`,
      [contact_name, contact_email, contact_message]
    )
    console.log('contactRequest:', response)
    res.status(200).send(response)
  } catch (error) {
    console.log('Error on contactRequest:', error)
    res.sendStatus(500)
  }
}

module.exports = { contactRequest }

