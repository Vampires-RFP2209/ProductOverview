const express = require('express')

const router = express.Router()

const { getProducts, getOneProduct, getStyles } = require('./controllers/index')

// all products
router.get('/', getProducts)

// product information for one product
router.get('/:product_id', getOneProduct)

// product styles
router.get('/:product_id/styles', getStyles)

module.exports = router
