import { each } from 'lodash'
import About from 'pages/about'
import Collections from 'pages/collections'
import Detail from 'pages/detail'
import Home from 'pages/home'

class App {
  constructor () {
    this.createContent()
    this.createPages()
    this.addLinkListeners()
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
    this.page.show()
    // this.page.hide()
  }

  async onChange (url) {
    this.page.hide()

    const res = await window.fetch(url)
    if (res.status === 200) {
      const html = await res.text()
      const div = document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]
      this.page.create()
      this.page.show()
    } else {
      console.error(`response status: ${res.status}`)
    }
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, link => {
      link.onclick = (event) => {
        const { target: { href } } = event
        event.preventDefault()
        this.onChange(href)
      }
    })
  }
}

new App()
