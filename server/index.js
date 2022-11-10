const express = require('express')
const cors = require('cors')
const path = require('path')
const router = require('./routes')
require('dotenv').config()

const LOADER = path.resolve(__dirname, process.env.TEST_LOADER)

// console.log(__dirname)
const app = express()
app.use(process.env.TEST_LOADER, express.static(LOADER))
app.use(express.json())
app.use(cors())

app.use('/products', router)

// app.get('/', (req, res) => {
//   res.send('hello')
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
