// export default class Product {
//   constructor(product) {
//     this.id = product.id
//     this.name = product.name
//     this.slogan = product.slogan
//     this.description = product.description
//     this.category = product.category
//     this.features = product.features
//     this.default_price = product.default_price
//     this.styles = product.styles.map((style) => ({
//       style_id: style.style_id,
//       name: style.name,
//       original_price: style.original_price,
//       sale_price: style.sale_price,
//       default: style['default?'],
//       photos: style.photos.map((photo) => ({
//         thumbnail_url: photo.thumbnail_url,
//         url: photo.url,
//       })),
//       skus: style.skus.map((sku) => ({
//         sku_id: {
//           quantity: sku.quantity,
//           size: sku.size,
//         },
//       })),
//     }))
//   }
// }

// GET /products
/* [
  {
    id: 40344,
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description:
      'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13',
    updated_at: '2021-08-13',
  },
] */

// GET /products/:id
/*
{
  id: 40344,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description:
    'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13',
  updated_at: '2021-08-13',
  features: [
    {
      feature: "Fabric",
      value: "Canvas"
    },
    {
      feature: "Buttons",
      value: Brass
    }
  ]
},
*/

// GET /products/:id/styles
/* {
  "product_id": "40344",
    "results": [
      {
          "style_id": 240500,
          "name": "Forest Green & Black",
          "original_price": "140.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
          ],
          "skus": {
              "1394769": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1394770": {
                  "quantity": 16,
                  "size": "S"
              },
              "1394771": {
                  "quantity": 17,
                  "size": "M"
              },
              "1394772": {
                  "quantity": 10,
                  "size": "L"
              },
              "1394773": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1394774": {
                  "quantity": 4,
                  "size": "XL"
              }
          }
      }
} */
