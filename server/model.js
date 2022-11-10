const { Pool } = require('pg')
const { db } = require('./db')

module.exports = {
  getAllProducts: function (page, count) {
    // Skip the specified amount of rows by an offset
    const skip = Number(page) * Number(count) - Number(count)
    // Retrieve the first N rows of the product table (offset by page)
    const queryAllProducts = `SELECT * FROM product ORDER BY id LIMIT ${count} OFFSET ${skip}`
    return new Promise((resolve, reject) => {
      db.query(queryAllProducts, (err, results) => {
        if (err) {
          return reject(err)
        }
        return resolve(results)
      })
    })
  },

  getProductByID: function (productID) {
    const queryProduct = `SELECT p.id, p.name, p.slogan, p.description, p.category, p.default_price, json_agg(json_build_object('feature', f.feature, 'value', f.value)) AS features
      FROM product AS p
      INNER JOIN features AS f
      ON p.id = f."productID"
      WHERE p.id=${productID}
      GROUP BY p.id`
    return new Promise((resolve, reject) => {
      db.query(queryProduct, (err, results) => {
        if (err) {
          return reject(err)
        }
        return resolve(results)
      })
    })
  },

  getStylesByID: function (productID) {
    // grabData(productID, callback)
    const queryStyles = `SELECT s.id, s.name, s.original_price, s.sale_price, s.default_style,
      jsonb_agg(DISTINCT jsonb_build_object('thumbnail_url', p.thumbnail_url, 'url', p.url)) AS photos,
      jsonb_object_agg(u.id, to_jsonb(u) - 'styleID' - 'id') AS skus
      FROM styles AS s
      INNER JOIN photos AS p
      ON s.id=p."styleID"
      INNER JOIN skus AS u
      ON s.id=u."styleID"
      WHERE s."productID" = ${productID}
      GROUP BY s.id`

    return new Promise((resolve, reject) => {
      db.query(queryStyles, (err, results) => {
        if (err) {
          return reject(err)
        }
        return resolve(results)
      })
    })
  },
}
