import { each } from 'lodash'
import About from 'pages/about'
import Canvas from 'components/Canvas'
import Collections from 'pages/collections'
import Detail from 'pages/detail'
import Home from 'pages/home'
import Preloader from './components/Preloader'
import { Navigation } from './components/Navigation'

class App {
  constructor () {
    this.createContent()

    this.createNavigation()
    this.createPreloader()
    this.createCanvas()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.update()
  }

  createNavigation () {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createCanvas () {
    this.canvas = new Canvas()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages () {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home()
    }

    this.page = this.pages[this.template]

    this.page.create()
  }

  // events

  onPreloaded () {
    this.preloader.destroy()

    this.onResize()

    this.page.show()
  }

  async onChange (url) {
    await this.page.hide()

    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]
      this.page.create()

      this.onResize()
      this.page.show()

      this.addLinkListeners()
    } else {
      console.error(`response status: ${request.status}`)
    }
  }

  onResize () {
    if (this.canvas && this.canvas.onResize) {
      this.canvas.onResize()
    }

    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }

  // loop
  update () {
    if (this.canvas && this.canvas.update) {
      this.canvas.update()
    }

    if (this.page && this.page.update) {
      this.page.update()
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  // listeners
  addEventListeners () {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    console.log('links', links)

    each(links, link => {
      link.onclick = (event) => {
        console.log('event'
          , event)
        const { target: { href } } = event
        event.preventDefault()
        this.onChange(href)
      }
    })
  }
}

new App()
