const { getAllProducts, getProductByID, getStylesByID } = require('../model')

module.exports = {
  getProducts: function (req, res) {
    let { page, count } = req.body
    page = page || '1'
    count = count || '5'
    getAllProducts(page, count)
      .then((products) => res.status(200).json(products.rows))
      .catch((err) => res.sendStatus(404))
  },

  getOneProduct: function (req, res) {
    let { productID } = req.params
    productID = productID || '1'
    getProductByID(productID)
      .then((productByID) => res.status(200).json(productByID.rows))
      .catch((err) => res.sendStatus(404))
  },

  getStyles: function (req, res) {
    let { productID } = req.params
    productID = productID || '1'
    getStylesByID(productID)
      .then((styles) => res.status(200).json(styles.rows))
      .catch((err) => res.sendStatus(404))
  },
}
