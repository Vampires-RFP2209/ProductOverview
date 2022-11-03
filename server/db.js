const { Client } = require('pg')

const db = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'admin',
  database: 'products',
})

db.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Successfully connected to database`)
})

db.query(`select * from product`, (res, err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res.rows)
  }
  db.end()
})
