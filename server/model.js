const { db } = require('./db')

module.exports = {
  getAllProducts: function (page, count, callback) {
    // Skip the specified amount of rows by an offset
    const skip = Number(page) * Number(count) - Number(count)
    // Retrieve the first N rows of the product table (offset by page)
    const queryAllProducts = `SELECT * FROM product ORDER BY id LIMIT ${count} OFFSET ${skip}`
    db.query(queryAllProducts, (err, results) => {
      if (err) {
        callback(err)
        console.log(
          `There was an error retrieving the ${count} products from page ${page} \nError: ${err}`
        )
      }
      callback(null, results)
    })
  },

  getProductByID: function (productID, callback) {
    const queryProduct = `SELECT p.id, p.name, p.slogan, p.description, p.category, p.default_price, json_agg(json_build_object('feature', f.feature, 'value', f.value)) AS features
    FROM product AS p
    INNER JOIN features AS f
    ON p.id = f."productID"
    WHERE p.id=${productID}
    GROUP BY p.id`
    db.query(queryProduct, (err, results) => {
      if (err) {
        callback(err)
        console.log(`There was an error retrieving product by ID ${productID} \nError: ${err}`)
      }
      callback(null, results)
    })
  },

  getStylesByID: function (productID, styleID, callback) {
    const queryStyles = `SELECT
    json_agg(json_build_object('id', s.id,'name', s.name, 'original_price', s.original_price,'sale_price', s.sale_price,'default', s.default_style))
    FROM styles AS s
    WHERE s."productID" = ${productID}
    GROUP BY s.id;`

    const queryPhotos = `SELECT
    json_build_object('photos', json_agg(json_build_object('thumbnail_url', p.thumbnail_url, 'url', p.url)))
    FROM photos AS p
    INNER JOIN styles AS s
    ON s.id = p."styleID"
    WHERE s.id=${styleID}`

    const querySkus = `SELECT
    json_build_object(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size))
    FROM skus
    INNER JOIN styles AS s
    ON s.id = skus."styleID"
    WHERE s.id=${styleID}
    GROUP BY skus.id;`
  },
}
