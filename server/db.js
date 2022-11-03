const { Client } = require('pg')
require('dotenv').config()

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 5432,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
})

db.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Successfully connected to database`)
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
