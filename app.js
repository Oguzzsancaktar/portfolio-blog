const prismicH = require('@prismicio/helpers')
const prismic = require('@prismicio/client')

require('dotenv').config()
const path = require('path')
const express = require('express')
const { client } = require('./config')
const app = express()
const port = 3000

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH
  }
  next()
})

process.setMaxListeners(0)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('pages/home'))

app.get('/about', async (req, res) => {
  const document = await client.get({
    predicates: prismic.predicates.any('document.type', ['about', 'metadata'])
  })

  const { results } = document
  const [about, metadata] = results
  res.render('pages/about', { about, metadata })
})

app.get('/collection', (req, res) => res.render('pages/collection'))
app.get('/detail/:uid', (req, res) => res.render('pages/detail'))

app.listen(port, () => console.log(`Example app l istening on port ${port}!`))
