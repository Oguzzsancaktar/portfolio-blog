import each from 'lodash/each'
import GSAP from 'gsap'

export default class Page {
  constructor ({ element, elements, id }) {
    this.selector = element
    this.selectorChildren = { ...elements }
    this.id = id
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = this.element.querySelectorAll(entry)
      }

      if (this.elements[key].length === 0) {
        this.elements[key] = null
      } else if (this.elements[key].length === 1) {
        this.elements[key] = this.elements[key][0]
      }
    })
  }

  show () {
    return new Promise(resolve => {
      GSAP.fromTo(this.element,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          duration: 1,
          onComplete: resolve
        })
    })
  }

  hide () {
    return new Promise(resolve => {
      GSAP.to(this.element, {
        autoAlpha: 0,
        duration: 1,
        onComplete: resolve
      })
    })
  }
}
