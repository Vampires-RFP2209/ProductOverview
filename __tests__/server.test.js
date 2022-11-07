// https://www.npmjs.com/package/supertest
const request = require('supertest')
const assert = require('assert')
const express = require('express')

const app = express()

app.get('/products', (req, res) => {
  res.status(200).json()
})

describe('/GET products', () => {
  it('should receive a status 200 when making a get request to /products endpoint', () => {
    request(app)
      .get('/products')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        console.log(res)
      })
  })
})
