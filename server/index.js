const express = require('express')
const cors = require('cors')
const router = require('./routes')
const path = require('path')
require('dotenv').config()

// console.log(__dirname)
const app = express()
app.use(express.json())
app.use(cors())

app.get(`/${process.env.TEST_LOADER}`, (req, res) => res.send(`${process.env.TEST_LOADER}`))

app.use('/products', router)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
