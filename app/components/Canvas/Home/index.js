import { Plane, Transform } from 'ogl'

import GSAP from 'gsap'
import Prefix from 'prefix'

import map from 'lodash/map'

import Media from './Media'

export default class {
  constructor ({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.transformPrefix = Prefix('transform')
    this.group = new Transform()

    this.galleryElement = document.querySelector('.home__gallery')
    this.mediasElements = document.querySelectorAll(
      '.home__gallery__media__image'
    )

    this.titlesElement = document.querySelector('.home__titles')

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.scrollCurrent = {
      x: 0,
      y: 0
    }

    this.scroll = {
      x: 0,
      y: 0
    }

    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.createGeometry()
    this.createGallery()

    this.onResize({
      sizes: this.sizes
    })

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry () {
    this.geometry = new Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20
    })
  }

  createGallery () {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  // Animations

  show () {
    map(this.medias, media => media.show())
  }

  hide () {
    map(this.medias, media => media.hide())
  }
  // Events

  onResize (event) {
    this.galleryBounds = this.galleryElement.getBoundingClientRect()

    this.sizes = event.sizes

    this.gallerySizes = {
      width: (this.galleryBounds.width / window.innerWidth) * this.sizes.width,
      height: (this.galleryBounds.height / window.innerHeight) * this.sizes.height
    }

    this.scroll.x = this.x.target = 0
    this.scroll.y = this.y.target = 0

    this.titlesElementHeight = this.titlesElement.getBoundingClientRect().height

    map(this.medias, (media) => media.onResize(event, this.scroll))
  }

  onTouchDown ({ x, y }) {
    this.speed.target = 1

    this.scrollCurrent.x = this.scroll.x
    this.scrollCurrent.y = this.scroll.y
  }

  onTouchMove ({ x, y }) {
    // const xDistance = x.start - x.end
    const yDistance = y.start - y.end

    // this.x.target = this.scrollCurrent.x - xDistance
    this.y.target = this.scrollCurrent.y - yDistance
  }

  onTouchUp ({ x, y }) {
    this.speed.target = 0
  }

  onWheel ({ pixelX, pixelY }) {
    // this.x.target += pixelX
    this.y.target += pixelY
  }

  // Update

  update () {
    this.speed.current = GSAP.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp)

    this.y.target += 1

    this.x.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp)
    this.y.current = GSAP.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

    if (this.scroll.x < this.x.current) {
      this.x.direction = 'right'
    } else if (this.scroll.x > this.x.current) {
      this.x.direction = 'left'
    }

    if (this.scroll.y < this.y.current) {
      this.y.direction = 'top'
    } else if (this.scroll.y > this.y.current) {
      this.y.direction = 'bottom'
    }

    this.scroll.x = this.x.current
    this.scroll.y = this.y.current

    map(this.medias, (media, index) => {
      const ofsetX = this.sizes.width * 0.5
      const scaleX = media.mesh.scale.x / 2

      if (this.x.direction === 'left') {
        const x = media.mesh.position.x + scaleX
        if (x < -ofsetX) {
          media.extra.x += this.gallerySizes.width
        }
      } else if (this.x.direction === 'right') {
        const x = media.mesh.position.x - scaleX

        if (x > ofsetX) {
          media.extra.x -= this.gallerySizes.width
        }
      }

      const ofsetY = this.sizes.height * 0.5
      const scaleY = media.mesh.scale.y / 2

      if (this.y.direction === 'top') {
        const y = media.mesh.position.y + scaleY

        if (y < -ofsetY) {
          media.extra.y += this.gallerySizes.height
        }
      } else if (this.y.direction === 'bottom') {
        const y = media.mesh.position.y - scaleY

        if (y > ofsetY) {
          media.extra.y -= this.gallerySizes.height
        }
      }

      media.update(this.scroll, this.speed.current)
    })
  }

  // Destroy.

  destroy () {
    this.scene.removeChild(this.group)
  }
}
