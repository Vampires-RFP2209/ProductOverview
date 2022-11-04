const { getAllProducts, getProductByID, getStylesByID } = require('../model')

module.exports = {
  getProducts: function (req, res) {
    const result = req.body

    res.status(200).send('hi this is getProducts')
  },

  getOneProduct: function (req, res) {
    const result = req.params
    res.status(200).send('hi this is get one product')
  },

  getStyles: function (req, res) {
    const result = req.params
    res.status(200).send('hi did you want to get all the styles for a certain product?')
  },
}
