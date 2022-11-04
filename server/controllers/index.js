module.exports = {
  getProducts: function (req, res) {
    res.status(200).send('hi this is getProducts')
  },

  getOneProduct: function (req, res) {
    res.status(200).send('hi this is get one product')
  },

  getStyles: function (req, res) {
    res.status(200).send('hi did you want to get all the styles for a certain product?')
  },
}
