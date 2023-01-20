import GSAP from 'gsap'

import Prefix from 'prefix'

import each from 'lodash/each'
import normalizeWheel from 'normalize-wheel'

import Title from '../animations/Title'
import { map } from 'lodash'
import Paragraph from '../animations/Paragraph'
import Label from '../animations/Label'
import Highlight from '../animations/Highlight'

export default class Page {
  constructor ({ element, elements, id }) {
    this.selector = element
    this.selectorChildren = {
      ...elements,

      animationsHighlights: '[data-animation="highlight"]',
      animationsTitles: '[data-animation="title"]',
      animationsParagraphs: '[data-animation="paragraph"]',
      animationsLabels: '[data-animation="label"]'

    }
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

    this.createAnimations()
  }

  createAnimations () {
    this.animations = []

    this.animationsTitles = map(this.elements.animationsTitles, element => {
      return new Title({ element })
    })

    this.animations.push(...this.animationsTitles)

    this.animationsParagraphs = map(this.elements.animationsParagraphs, element => {
      return new Paragraph({ element })
    })

    this.animations.push(...this.animationsParagraphs)

    this.animationsLabels = map(this.elements.animationsLabels, element => {
      return new Label({ element })
    })

    this.animations.push(...this.animationsLabels)

    this.animationsHighlights = map(this.elements.animationsHighlights, element => {
      return new Highlight({ element })
    })

    this.animations.push(...this.animationsHighlights)
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

    each(this.animations, animation => animation.onResize())
  }

  onMouseWheel (event) {
    const { pixelY } = normalizeWheel(event)

    this.scroll.target += pixelY
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
