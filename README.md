# System Design Capstone - Products

## About

This project comprises of a complete redesign of our client's eCommerce retail web-portal to help sales and conversion numbers.

This project was built with:

<div align="center" width="100%">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
</div>

## Table of Contents

- [System Design Capstone - Products](#system-design-capstone---products)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Database](#database)
    - [Performance](#performance)
  - [Environment Variables](#environment-variables)
  - [Environment Variables](#environment-variables-1)
  - [Contributors](#contributors)

## Database

### Performance

`GET /products`\
Retrieves general product information on a user specified given page and a count

- Original - `6ms`
- No optimization needed and using an index didn't provide any performance improvements

`GET /products/:id`\
Retrieves detailed product information of a product, given a specified product ID number through a single query that aggregates all the relevant input sets

- Original - `90ms`
- Optimized - `71ms`

`GET /products/:id/styles`\
Retrieves all styles for one product, retrieves all photos for each style, and retrieves all sku information for all styles through a single query that aggregates all the relevant input sets.

- Original - `18s`
- Optimized - `1.1s`

Optimization techniques involved using an index and switching from a single client instance to a pool of client instances, resulting in improved performance when querying the database over many tables.\

Metrics reported are the median values, error rate being < 1.0% for all queries.

## Environment Variables

`PORT` - The port that the server will run on | <em>(default: 4000)</em>\
`DB_HOST` - The host of the PostgreSQL database | <em>(recommended: localhost)</em>\
`DB_USER` - The user of the PostgreSQL database\
`DB_PASS` - The password to the PostgreSQL database\
`DB_DATABASE` - The name of the PostgreSQL database\
`DB_PORT` - The port that the server will run on | <em>(default: 5432)</em>

## Environment Variables

To run the server locally for development, please specify in a .env file the `DB_HOST`, `DB_USER`, `DB_PASS`, and `DB_DATABASE`.

## Contributors

**Quyen Hoang**\
<img src="https://user-images.githubusercontent.com/104607182/198861294-a3c1a341-0f11-4cdd-bba1-c4a254c40fc6.png" alt="Quyen Hoang" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/quyenduhoang/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/quyencodes/)
