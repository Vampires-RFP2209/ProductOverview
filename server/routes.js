const express = require('express')

const router = express.Router()

const { getProducts, getOneProduct, getStyles } = require('./controllers/index')

// all products
router.get('/', getProducts)

// product information for one product
router.get('/:productID', getOneProduct)

// product styles
router.get('/:productID/styles', getStyles)

module.exports = router
