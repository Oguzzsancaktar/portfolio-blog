
// import fetch from 'node-fetch'
const fetch = require('node-fetch')

const prismic = require('@prismicio/client')

const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  fetch
})
module.exports = { client }
