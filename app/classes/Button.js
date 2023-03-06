import GSAP from 'gsap'
import Component from './Component'

export default class Button extends Component {
  constructor ({ element }) {
    super({ element })

    this.path = this.element.querySelector('path:last-child')

    this.pathLength = this.path.getTotalLength()

    this.timeline = GSAP.timeline({ paused: true })

    this.timeline.fromTo(this.path, {
      strokeDashoffset: this.pathLength,
      strokeDashArray: `${this.pathLength} ${this.pathLength}`
    }, {
      strokeDashoffset: this.pathLength,
      strokeDashArray: `${this.pathLength} ${this.pathLength}`
    })
  }

  onMouseEnter () {
    this.timeline.play()
  }

  onMouseLeave () {
    this.timeline.reverse()
  }

  addEventListeners () {
    this.onMouseEnterEvent = this.onMouseEnter.bind(this)
    this.onMouseLeaveEvent = this.onMouseLeave.bind(this)
    this.element.addEventListener('mouseenter', this.onMouseEnterEvent)
    this.element.addEventListener('mouseleave', this.onMouseLeaveEvent)
  }

  removeEventListeners () {
    this.element.removeEventListener('mouseenter', this.onMouseEnterEvent)
    this.element.removeEventListener('mouseleave', this.onMouseLeaveEvent)
  }
}