const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/products', router)

// app.get('/', (req, res) => {
//   res.send('hello')
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
