const { Pool } = require('pg')
require('dotenv').config()

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
})

db.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(
    `Successfully connected to ${process.env.DB_DATABASE} database on port ${process.env.DB_PORT}`
  )
})

module.exports = {
  db,
}
