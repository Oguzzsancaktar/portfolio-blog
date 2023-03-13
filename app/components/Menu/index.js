import GSAP from 'gsap'
import { each } from 'lodash'

import Element from 'classes/discover/Element'

import { Detection } from 'classes/discover/Detection'

import { randomInteger } from 'utils/math'
import { split } from 'utils/text'

export default class extends Element {
  constructor () {
    super({
      appear: true,
      element: 'nav',
      name: 'Menu'
    })

    this.element.className = 'Menu menu'
    this.element.innerHTML = `
      <a href="/current" data-index="0" class="Button button">
        <svg class="button__media" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.6 63.3">
          <path class="Line button__path" d="M129.6,13.6c-38.7,0-77.3,0-116,0C9.2,9.2,4.8,4.8,0.4,0.4"/>
          <path class="Line button__path" d="M0.4,62.9c4.4-4.4,8.8-8.8,13.3-13.3c38.7,0,77.3,0,116,0"/>
        </svg>

        <span class="Text button__text">Current</span>
      </a>

      <a href="/projects" data-index="1" class="Button button">
        <svg class="button__media" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.6 63.3">
          <path class="Line button__path" d="M129.3,0.4c-4.4,4.4-8.8,8.8-13.3,13.3c-38.7,0-77.3,0-116,0"/>
          <path class="Line button__path" d="M0,49.7c38.7,0,77.3,0,116,0c4.4,4.4,8.8,8.8,13.3,13.3"/>
        </svg>

        <span class="Text button__text">Projects</span>
      </a>
    `

    this.elements = {
      buttons: this.element.querySelectorAll('.Button'),
      texts: this.element.querySelectorAll('.Text'),
      textsSpans: [],
      lines: this.element.querySelectorAll('.Line')
    }

    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-+=[]{}|;:,./<>?'.split('')

    this.enable()
    this.setup()
  }

  setup () {
    each(this.elements.texts, text => {
      const spans = split({
        element: text,
        expression: '',
        append: false,
        calculate: false
      })

      each(spans, (span, index) => {
        GSAP.set(span, { y: index % 2 === 0 ? '100%' : '-100%' })

        span.setAttribute('data-original', span.innerHTML)
      })

      this.elements.textsSpans.push(spans)
    })

    each(this.elements.lines, line => {
      line.style.strokeDasharray = `${line.getTotalLength()}px`
      line.style.strokeDashoffset = `${line.getTotalLength()}px`
    })
  }

  disable () {
    this.isEnabled = false
  }

  enable () {
    this.isEnabled = true
  }

  show () {
    const timeline = GSAP.timeline()

    each(this.elements.textsSpans, spans => {
      timeline.staggerTo(spans, 0.5, {
        y: '0%'
      }, 0.1, 'start')
    })

    timeline.staggerTo(this.elements.lines, 0.5, {
      strokeDashoffset: 0
    }, 0.1, 'start')

    return super.show(timeline)
  }

  hide () {
    const timeline = GSAP.timeline()

    each(this.elements.textsSpans, spans => {
      timeline.staggerTo(spans, 0.5, {
        cycle: {
          y: ['100%', '-100%']
        }
      }, 0.1, 'start')
    })

    timeline.staggerTo(this.elements.lines, 0.5, {
      strokeDashoffset: 134.8
    }, 0.1, 'start')

    return super.hide(timeline)
  }

  randomize (event) {
    const index = event.target.getAttribute('data-index')

    this.interval = setInterval(() => {
      each(this.elements.textsSpans[index], (span, index) => {
        span.innerHTML = this.characters[randomInteger(0, this.characters.length - 1)]
      })
    }, 50)
  }

  unrandomize (event) {
    const index = event.target.getAttribute('data-index')

    clearInterval(this.interval)

    each(this.elements.textsSpans[index], (span, index) => {
      span.innerHTML = span.getAttribute('data-original')
    })
  }

  click (event) {
    event.preventDefault()

    if (!this.isEnabled) return

    this.emit('change', event.target.getAttribute('href'))
  }

  addEventListeners () {
    each(this.elements.buttons, (button, index) => {
      if (!Detection.isMobile()) {
        button.addEventListener('mouseover', this.randomize)
        button.addEventListener('mouseout', this.unrandomize)
      }

      button.addEventListener('click', this.click)
    })
  }

  removeEventListeners () {
    each(this.elements.buttons, (button, index) => {
      if (!Detection.isMobile()) {
        button.removeEventListener('mouseover', this.randomize)
        button.removeEventListener('mouseout', this.unrandomize)
      }

      button.removeEventListener('click', this.click)
    })
  }

  onRoute (route) {
    if (route === '/') {
      this.show()
    } else {
      this.hide()
    }
  }
}
