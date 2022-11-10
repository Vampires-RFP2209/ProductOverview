const { Pool } = require('pg')
require('dotenv').config()

const DB_PORT = 5432

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
})

db.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Successfully connected to ${process.env.DB_DATABASE} database on port ${DB_PORT}`)
})

// db.query(`select * from product`, (res, err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res.rows)
//   }
//   db.end()
// })

module.exports = {
  db,
}
