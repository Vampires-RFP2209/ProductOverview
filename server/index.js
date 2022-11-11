const express = require('express')
const cors = require('cors')
const router = require('./routes')
require('dotenv').config()

// console.log(__dirname)
const app = express()
app.use(express.json())
app.use(cors())

app.use('/products', router)
app.get(process.env.TEST_LOADER, (req, res) => res.send(process.env.TEST_LOADER))

// app.get('/', (req, res) => {
//   res.send('hello')
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
