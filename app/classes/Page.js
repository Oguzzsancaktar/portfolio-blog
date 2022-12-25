import each from 'lodash/each'
import GSAP from 'gsap'
import Prefix from 'prefix'

export default class Page {
  constructor ({ element, elements, id }) {
    this.selector = element
    this.selectorChildren = { ...elements }
    this.id = id

    this.transformPrefix = Prefix('transform')

    this.onMouseWheel = this.onMouseWheel.bind(this)
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

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
      this.animationIn = GSAP.timeline()

      this.animationIn.fromTo(this.element,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          duration: 1

        })

      this.animationIn.call(_ => {
        this.addEventListeners()
        resolve()
      })
    })
  }

  hide () {
    return new Promise(resolve => {
      this.animationOut = GSAP.timeline()

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        duration: 1
      })

      this.animationOut.call(_ => {
        this.removeEventListeners()
        resolve()
      })
    })
  }

  onResize () {
    if (this.elements?.wrapper) {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
    }
  }

  onMouseWheel (event) {
    const { deltaY } = event

    this.scroll.target += deltaY
  }

  update () {
    this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateY(${-this.scroll.current}px)`
    }
  }

  addEventListeners () {
    window.addEventListener('wheel', this.onMouseWheel)
  }

  removeEventListeners () {
    window.removeEventListener('wheel', this.onMouseWheel)
  }
}
