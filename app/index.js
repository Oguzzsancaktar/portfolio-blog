// Libs.
import Stats from 'stats.js'
import { each } from 'lodash'

// Components
import Canvas from 'components/Canvas'

// Discover.
import About from 'pages/about'
import Collections from 'pages/collections'
import Detail from 'pages/detail'
import Home from 'pages/home'
import Discover from 'pages/discover'
import DiscoverCanvas from 'components/DiscoverCanvas'

import Preloader from './components/Preloader'
import { Navigation } from './components/Navigation'
import normalizeWheel from 'normalize-wheel'
import PageTransition from './components/PageTransition'

class App {
  constructor () {
    this.createContent()

    this.createCanvas()
    this.createPreloader()
    this.createNavigation()
    this.createPages()

    this.createDiscoverCanvas()

    this.createPageTransition()

    this.addEventListeners()
    this.addLinkListeners()

    this.onResize()

    this.createStats()
    this.update()
  }

  createDiscoverCanvas () {
    this.discoverCanvas = new DiscoverCanvas({
      template: this.template
    })
  }

  createCanvas () {
    this.canvas = new Canvas({
      template: this.template
    })
  }

  createNavigation () {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPreloader () {
    this.preloader = new Preloader({
      canvas: this.canvas
    })
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createPageTransition () {
    this.pageTransition = new PageTransition()
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
      discover: new Discover(),
      home: new Home()
    }

    this.page = this.pages[this.template]

    this.page.create()
  }

  createStats () {
    this.stats = new Stats()

    document.body.appendChild(this.stats.domElement)
  }

  // events

  onPreloaded () {
    this.onResize()
    this.canvas.onPreloaded()
    this.page.show()

    this.discoverCanvas.onPreloaded(this.template)
  }

  async onChange (url) {
    this.canvas.onChangeStart(this.template, url) // ?

    if (url.includes('current') && this.discoverCanvas.background.onRoute) {
      return this.discoverCanvas.background.onRoute('/current')
    }

    if (url.includes('projects') && this.discoverCanvas.showProjects) {
      return this.discoverCanvas.showProjects()
    }

    if (!url.includes('discover') && this.discoverCanvas.visualization.hide) {
      await this.discoverCanvas.hideMenu()
      this.discoverCanvas.visualization.hide()
      this.discoverCanvas.logo.hide()
    }

    this.pageTransition.show()
    await this.page.hide()

    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      window.history.pushState({}, '', url)
      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.canvas.onChangeEnd(this.template)

      this.page = this.pages[this.template]
      this.page.create()

      this.page.show()
      await this.pageTransition.hide()

      if (this.template === 'discover' && this.discoverCanvas && this.discoverCanvas.visualization && this.discoverCanvas.visualization.show) {
        this.discoverCanvas.visualization.show()

        await this.discoverCanvas.showMenu()

        this.discoverCanvas.logo.show()
        this.discoverCanvas.logo.onRoute('/discover')
      }

      this.addLinkListeners()

      this.onResize()
    } else {
      console.error(`response status: ${request.status}`)
    }
  }

  onResize () {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }

    window.requestAnimationFrame((_) => {
      if (this.canvas && this.canvas.onResize) {
        this.canvas.onResize()
      }
      if (this.pageTransition && this.pageTransition.onResize) {
        this.pageTransition.onResize()
      }

      if (this.discoverCanvas && this.discoverCanvas.onResize) {
        this.discoverCanvas.onResize()
      }
    })
  }

  onTouchDown (event) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event)
    }
  }

  onTouchMove (event) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event)
    }
  }

  onTouchUp (event) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event)
    }
  }

  onWheel (event) {
    const normalizedWheel = normalizeWheel(event)

    if (this.canvas && this.canvas.onWheel) {
      this.canvas.onWheel(normalizedWheel)
    }

    if (this.page && this.page.onWheel) {
      this.page.onWheel(normalizedWheel)
    }
  }

  // loop
  update () {
    if (this.stats) {
      this.stats.begin()
    }

    if (this.page && this.page.update) {
      this.page.update()
    }

    if (this.canvas && this.canvas.update) {
      this.canvas.update(this.page.scroll)
    }

    if (this.discoverCanvas && this.discoverCanvas.update) {
      this.discoverCanvas.update(this.template)
    }

    if (this.stats) {
      this.stats.end()
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  // listeners
  addEventListeners () {
    window.addEventListener('wheel', this.onWheel.bind(this))

    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, (link) => {
      link.onclick = (event) => {
        const {
          target: { href }
        } = event
        event.preventDefault()
        this.onChange(href)
      }
    })
  }
}

new App()
