const { getAllProducts, getProductByID, getStylesByID } = require('../model')

module.exports = {
  getProducts: function (req, res) {
    let { page, count } = req.body
    page = page || '1'
    count = count || '5'
    getAllProducts(page, count, (err, products) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.status(200).json(products.rows)
      }
    })
    // res.status(200).send(`hi this is getProducts ${JSON.stringify(req.body)}`)
  },

  getOneProduct: function (req, res) {
    let { productID } = req.params
    productID = productID || '1'
    getProductByID(productID, (err, productByID) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.status(200).json(productByID.rows)
      }
    })
    // res.status(200).send(`hi this is get one product ${JSON.stringify(productID)}`)
  },

  getStyles: function (req, res) {
    let { productID } = req.params
    productID = productID || '1'
    getStylesByID(productID, (err, styles) => {
      if (err) {
        res.status(404)
      } else {
        res.status(200).send(styles.rows)
      }
    })
    // res
    //   .status(200)
    //   .send(
    //     `hi did you want to get all the styles for a certain product? ${JSON.stringify(productID)}`
    //   )
  },
}
