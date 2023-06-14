require('dotenv').config()
const { Client } = require('pg')
console.log(process.env.CONNECTION_STRING)
const client = new Client({ connectionString: process.env.CONNECTION_STRING })

const queryInvoke = async (query, params) => {
  try {
    await client.connect()
    const res = await client.query(query, params)
    // console.log(res.rows[0].message)
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
