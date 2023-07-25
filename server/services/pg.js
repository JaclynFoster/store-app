require('dotenv').config()
const { Client } = require('pg')

const queryInvoke = async (query, params) => {
  try {
    const client = new Client({
      connectionString: process.env.CONNECTION_STRING
    })
    await client.connect()
    const res = await client.query(query, params)
    await client.end()
    return res
  } catch (error) {
    console.log('[queryInvoke] error: ', error)
    throw error
  }
}

// This is where I initiate the postgres client server through cockroachDB
// Making a reusable query invoker

module.exports = { queryInvoke }

