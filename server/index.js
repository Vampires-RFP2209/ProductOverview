const express = require('express')
const cors = require('cors')
const router = require('./routes')
require('dotenv').config()

// console.log(__dirname)
const app = express()
app.use(express.json())
app.use(cors())

app.use('/products', router)
app.get('/loaderio-67ce1f18f770175e36b376c343a97595', (req, res) =>
  res.send('loaderio-67ce1f18f770175e36b376c343a97595')
)

// app.get('/', (req, res) => {
//   res.send('hello')
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
