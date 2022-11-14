import http from 'k6/http'
import { sleep } from 'k6'

const ENDPOINT = 'http://localhost:4000'
const MAX_ID = 40000
const MAX_PAGES = 200
const MAX_COUNT = 10
const MAX_SLEEP = 3
const getRandom = (max) => Math.floor(Math.random() * max)
const randomId = () => getRandom(MAX_ID)
const randomSleep = () => getRandom(MAX_SLEEP)
const randomPage = () => getRandom(MAX_PAGES)
const randomCount = () => getRandom(MAX_COUNT)

export const options = {
  vus: 500,
  duration: '60s',

  thresholds: {
    // http errors should be less than 1% and abort if exceeded
    http_req_failed: ['rate<0.01'],
    // 100% of requests should be below 50ms
    // http_req_duration: ['p(100) < 50'],
  },
}

// GET products endpoint
// export default function () {
//   let body = {
//     page: randomPage(),
//     count: randomCount(),
//   }

//   http.get(`${ENDPOINT}/products/`, JSON.stringify(body))
//   // http.get(`${ENDPOINT}/products/`)
//   sleep(1)
// }

// // GET product endpoint (singular) /products/:product_id
// export default function () {
//   http.get(`${ENDPOINT}/products/${randomId()}`)
//   sleep(1)
// }

// // GET styles endpoint /products/:product_id/styles
// export default function () {
//   http.get(`${ENDPOINT}/products/${randomId()}/styles`)
//   sleep(1)
// }
