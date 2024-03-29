import AutoBind from 'auto-bind'
import EventEmitter from 'events'

import GSAP from 'gsap'

export default class extends EventEmitter {
  constructor ({ appear = false, element, name }) {
    super()

    this.appear = appear
    this.element = document.createElement(element)
    this.name = name

    AutoBind(this)
  }

  async show (animation = GSAP.timeline()) {
    document.body.appendChild(this.element)

    this.addEventListeners()

    await new Promise(resolve => {
      animation.call(() => resolve())
    })
  }

  async hide (animation = GSAP.timeline()) {
    if (!this.element.parentNode) return

    await new Promise(resolve => {
      animation.call(() => resolve())
    })

    document.body.removeChild(this.element)

    this.removeEventListeners()

    return Promise.resolve()
  }

  addEventListeners () {

  }

  removeEventListeners () {

  }

  onRoute (route) {

  }
}
