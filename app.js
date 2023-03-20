const prismicH = require('@prismicio/helpers')
const prismic = require('@prismicio/client')

// const errorHandler = require('errorhandler')

require('dotenv').config()

const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const path = require('path')
const express = require('express')
const { client } = require('./config')
const app = express()
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())

app.use(express.static(path.join(__dirname, 'public')))

// Link Resolver
const HandleLinkResolver = (doc) => {
  if (doc === '/') {
    return '/'
  }

  if (doc.type === 'product') {
    return `/detail/${doc.slug}`
  }

  if (doc.type === 'collections') {
    return '/collections'
  }

  if (doc.type === 'about') {
    return '/about'
  }

  if (doc.type === 'discover') {
    return '/discover'
  }
}

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
    Numbers: (index) => {
      return index === 0
        ? 'One'
        : index === 1
          ? 'Two'
          : index === 2
            ? 'Three'
            : 'Four'
    },
    Link: HandleLinkResolver
  }
  next()
})

process.setMaxListeners(0)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest = async (req, res) => {
  const about = await client.getSingle('about')
  const home = await client.getSingle('home')
  const metadata = await client.getSingle('metadata')
  const preloader = await client.getSingle('preloader')
  const navigation = await client.getSingle('navigation')

  const { results: collections } = await client.get({
    predicates: prismic.predicates.at('document.type', 'collection'),
    fetchLinks: 'product.image'
  })

  const assets = []

  home.data.gallery.forEach((item) => {
    assets.push(item.image.url)
  })

  about.data.gallery.forEach((item) => {
    assets.push(item.image.url)
  })

  about.data.body.forEach((section) => {
    if (section.slice_type === 'gallery') {
      section.items.forEach((item) => {
        assets.push(item.image.url)
      })
    }
  })

  collections.forEach((collection) => {
    collection.data.products.forEach((product) => {
      assets.push(product.products_product.data.image.url)
    })
  })

  console.log('navigation', navigation.data.list)
  return {
    assets,
    about,
    home,
    collections,
    metadata,
    preloader,
    navigation
  }
}

app.get('/', async (req, res) => {
  const defaults = await handleRequest(req, res)

  res.render('pages/home', { ...defaults })
})

app.get('/about', async (req, res) => {
  const defaults = await handleRequest(req, res)

  res.render('pages/about', { ...defaults })
})

app.get('/collections', async (req, res) => {
  const defaults = await handleRequest(req, res)

  res.render('pages/collections', { ...defaults })
})

app.get('/discover', async (req, res) => {
  const defaults = await handleRequest(req, res)
  const socials = [
    {
      label: 'Instagram',
      url: 'https://www.twitter.com/_sancaktar'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Oguzzsancaktar'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/oguztahasancaktar/'
    },
    {
      label: 'Email',
      url: 'mailto:oguztahasancaktar@gmail.com'
    }
  ]
  res.render('pages/discover', { ...defaults, socials })
})

app.get('/detail/:uid', async (req, res) => {
  const defaults = await handleRequest(req, res)

  const product = await client.getByUID('product', req.params.uid, {
    fetchLinks: ['collection.title']
  })

  res.render('pages/detail', { ...defaults, product })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
