import GSAP, { Power2 } from 'gsap'

import Element from 'classes/discover/Element'
import SVGMorpheus from 'plugins/SVGMorpheus'

import { Detection } from 'classes/discover/Detection'

// import * as styles from './styles.scss'

const CENTER = 'center'
const TOP = 'top'

export default class extends Element {
  constructor () {
    super({
      appear: true,
      element: 'button',
      name: 'Logo'
    })

    // TODO fix module scss
    this.element.className = 'Logo discover__logo'
    this.element.innerHTML = `
      <svg class="Media discover__logo__media" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.6 95">
        <g id="close">
          <path fill="none" d="M11.3,31.1l6.3,6.3" />
          <path fill="none" d="M20.4,40l8.9,9.1" />
          <path fill="none" d="M29.3,31.1l-18,18" />
        </g>

        <g id="logo">
        <path class="st0" d="M0.7,11.3V8.5C0.7,3.8,4.5,0,9.2,0s8.5,3.8,8.5,8.5V31V8.5c0-4.7,3.8-8.5,8.5-8.5h14.2"/>
        <path class="st0" d="M0,38.9c0,0,8.8,0.1,11.7,0.1c4,0,8.5,3.8,8.5,8.5V57v-9.5c0-4.7,3.8-8.5,8.5-8.5h11.8"/>
        <path class="st0" d="M28.7,92.7h11.3V81.4h-9c-5.1,0-10,2-13.7,5.7c-3.6,3.6-8.5,5.7-13.7,5.7H0.5V81.4"/>
        <path class="st0" d="M0.5,66.2V54.9h11.4"/>
        <path class="st0" d="M0.7,22.8h39.8"/>
        <path class="st0" d="M0.1,81.8l40.2-15.2"/>
        <path class="st0" d="M0,66.7l40.5-0.1"/>
        <path class="st0" d="M40,66.1V54.8H28.7"/>
        <path class="st0" d="M0.7,11.2v23.4"/>
        </g>
      </svg>
    `

    this.elements = {
      media: this.element.querySelector('.Media')
    }

    this.enable()
    this.setup()
  }

  setup () {
    this.morpheus = new SVGMorpheus(this.elements.media)

    this.hover = GSAP.timeline({ paused: true })
    this.hover.to(this.element, 1, {
      ease: Power2.easeOut,
      rotation: '+= 180',
      x: '-50%',
      y: '-50%'
    })
  }

  disable () {
    this.isEnabled = false
  }

  enable () {
    this.isEnabled = true
  }

  show () {
    GSAP.set(this.element, {
      autoAlpha: 1
    })

    return super.show()
  }

  hide () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })

    return super.hide()
  }

  click () {
    if (!this.isEnabled) return

    if (this.route.indexOf('/projects') > -1) {
      this.emit('change', '/work')
    } else {
      this.emit('change', '/')
    }
  }

  hover () {
    if (this.state === TOP) {
      this.morpheus.to('close', {
        duration: 1000,
        rotation: 'random'
      })
    }
  }

  addEventListeners () {
    this.element.addEventListener('click', this.click)

    if (!Detection.isMobile()) {
      this.element.addEventListener('mouseenter', this.hover)
    }
  }

  removeEventListeners () {
    this.element.removeEventListener('click', this.click)

    if (!Detection.isMobile()) {
      this.element.removeEventListener('mouseenter', this.hover)
    }
  }

  onRoute (route) {
    this.route = route

    return new Promise((resolve, reject) => {
      if (route === '/discover') {
        this.morpheus.to('logo', {
          duration: 1000,
          rotation: 'random'
        })

        GSAP.to(this.element, {
          left: '50%',
          top: '50%',
          duration: 0.8,
          onComplete: () => {
            console.log(4)
            resolve()
          }
        })

        this.state = CENTER
      } else {
        this.morpheus.to('close', {
          duration: 1000,
          rotation: 'random'
        })

        GSAP.to(this.element, {
          left: '50%',
          top: 100,
          duration: 0.8,
          onComplete: () => {
            console.log(4)
            resolve()
          }
        })

        this.state = TOP
      }
    })
  }
}
