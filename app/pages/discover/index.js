import GSAP, { Expo } from 'gsap'
import { each } from 'lodash'

import Page from 'classes/Page'

import { split, calculate } from 'utils/text'

export default class Discover extends Page {
  constructor () {
    super({
      id: 'discover',
      element: '.discover__wrapper',
      elements: {
        title: '.Title',
        description: '.Description',
        social: '.Social'
      }
    })
    this.descriptionSpans = []
  }

  create () {
    super.create()
    this.element.parentNode.classList = 'discover'

    each(this.elements.description, description => {
      const group = split({
        element: description,
        expression: ' '
      })

      group.forEach(element => {
        this.descriptionSpans.push(element)
      })
    })
  }

  show () {
    this.element.parentNode.classList = 'discover discover--active'
    const timeline = GSAP.timeline()

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const { social, title } = this.elements

        const ease = Expo.easeOut
        const spans = calculate(this.descriptionSpans)

        timeline.set(this.element, {
          autoAlpha: 1
        })

        timeline.fromTo(title, {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          ease,
          y: 0
        })

        timeline.fromTo(spans, {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          ease,
          y: 0
        }, 0.05, '-= 1.45')

        timeline.fromTo(social, {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          ease,
          y: 0
        }, '-= 1.45')
      })
    })

    return super.show(timeline)
  }

  hide () {
    this.element.parentNode.classList = 'discover '

    const { social, title } = this.elements

    const timeline = GSAP.timeline()

    const ease = Expo.easeOut
    const spans = calculate(this.descriptionSpans)

    timeline.to(title, {
      autoAlpha: 0,
      ease,
      y: -50
    })

    timeline.staggerTo(spans, {
      autoAlpha: 0,
      ease,
      y: -50
    }, 0.05, '-= 0.5')

    timeline.to(social, {
      autoAlpha: 0,
      ease,
      y: -50
    }, '-= 0.5')

    timeline.set(this.element, {
      autoAlpha: 0
    })

    return super.hide(timeline)
  }
}
