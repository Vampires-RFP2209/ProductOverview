# Atelier Products | System Design

## About

This project comprises of replacing the existing API for a retail web portal with a back end system that can fully support a substantial products data set and can meet the demands of production scale.

This project was built with:

<div align="center" width="100%">
  <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
</div>

## Table of Contents

- [Atelier Products | System Design](#atelier-products--system-design)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [API Endpoints](#api-endpoints)
  - [Products API](#products-api)
    - [Product List](#product-list)
    - [Product Information](#product-information)
    - [Product Styles](#product-styles)
  - [Performance Results](#performance-results)
  - [Local Development Environment](#local-development-environment)
  - [Environment Variables](#environment-variables)
  - [Contributors](#contributors)

## API Endpoints

This Express application is serving product data for a retail web portal. Listed below are the endpoint routes built, serving SQL data loaded from `.csv` files.

## Products API

### Product List

Retrieves the list of products.

`GET /products`

Parameters

| Parameter | Type    | Description                                               |
| --------- | ------- | --------------------------------------------------------- |
| page      | integer | Selects the page of results to return (Default 1)         |
| count     | integer | Specifies how many results per page to return (Default 5) |

Response

`Status: 200 OK `

```json
[
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  },
  {
    "id": 2,
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69"
  },
  {
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40"
  }
  // ...
]
```

### Product Information

Returns all product level information for a specified product id.

`GET /products/:product_id`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the product requested |

Response

`Status: 200 OK `

```json
[
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140",
    "features": [
      {
        "feature": "Fabric",
        "value": "Canvas"
      },
      {
        "feature": "Buttons",
        "value": "Brass"
      }
    ]
  }
]
```

### Product Styles

Returns all the styles available for a given product.

`GET /products/:product_id/styles`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the product requested |

Response

`Status: 200 OK `

```json
[
  {
    "id": 1,
    "name": "Forest Green & Black",
    "original_price": "140",
    "sale_price": "null",
    "default_style": true,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
      }
      // ...
    ],
    "skus": {
      "1": {
        "size": "XS",
        "quantity": 8
      }
      // ...
    }
  },
  {
    "id": 2,
    "name": "Desert Brown & Tan",
    "original_price": "140",
    "sale_price": "null",
    "default_style": false,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
      }
      // ...
    ],
    "skus": {
      "7": {
        "size": "XS",
        "quantity": 8
      }
      // ...
    }
  }
  // ...
]
```

## Performance Results

<b>Target Preformance</b>

- [x] **Throughput:** 100 RPS
- [x] **Latency:** 2000ms
- [x] **Error rate:** <1% rate

<b>Performance</b>

`GET /products`

Retrieves general product information on a user specified given page and a count

Original Performance

- [x] **Throughput:** 1700 RPS
- [x] **Latency:** 2006ms

Optimized Performance

- [x] **Throughput:** 2000 RPS
- [x] **Latency:** 2046ms

`GET /products/:product_id`

Retrieves detailed product information, given a specified product ID number through a single query

Original Performance

- [x] **Throughput:** 250 RPS
- [x] **Latency:** 2196ms

Optimized Performance

- [x] **Throughput:** 2000 RPS
- [x] **Latency:** 2034ms

`GET /products/:product_id/styles`

Retrieves all styles for one product, retrieves all photos for all styles, and retrieves all sku information for all styles through a single query

Original Performance

- [x] **Throughput:** 100 RPS
- [x] **Latency:** 18s

Optimized Performance

- [x] **Throughput:** 500 RPS
- [x] **Latency:** 1975ms

<b>Performance Results</b>

Optimization techniques involved aggregating queries, creating indexes, and changing from a single client instance to a pool of client instances. A second iteration of optimization involved reindexing columns, as multicolumn indexing was unlikely helpful. These changes resulted in improved performance when querying the database over many tables.

In the `/products` endpoint, we observe a slight improvement in RPS. The `/products/:product_id` endpoint we realized an 8x increase in RPS. Lastly, in the `/products/:product_id/styles` endpoint, we observe a 5x increase in RPS and a significant improvement in overall latency to meet target performance.

Metrics reported are the average values. Error rate being < 1% for all queries.

## Local Development Environment

To run the server locally for development, please specify in a .env file the `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_DATABASE`, and `DB_PORT`. Please feel free to make a copy of `example.env`.

## Environment Variables

`PORT` - The port that the express server will run on <em>(default: 4000)</em>\
`DB_HOST` - The host name / address of the PostgreSQL database\
`DB_USER` - The user of the PostgreSQL database\
`DB_PASS` - The password to the PostgreSQL database\
`DB_DATABASE` - The name of the PostgreSQL database\
`DB_PORT` - The port that the PostgreSQL database will run on

## Contributors

**Quyen Hoang**\
<img src="https://user-images.githubusercontent.com/104607182/198861294-a3c1a341-0f11-4cdd-bba1-c4a254c40fc6.png" alt="Quyen Hoang" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/quyenduhoang/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/quyencodes/)
