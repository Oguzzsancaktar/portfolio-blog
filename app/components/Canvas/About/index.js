import { Plane, Transform } from 'ogl'

import map from 'lodash/map'

import Gallery from './Gallery'

export default class {
  constructor ({ gl, scene, sizes }) {
    this.gl = gl
    this.sizes = sizes

    this.group = new Transform()

    this.createGeometry()
    this.createGalleries()

    this.onResize({
      sizes: this.sizes
    })

    this.group.setParent(scene)

    this.show()
  }

  createGeometry () {
    this.geometry = new Plane(this.gl)
  }

  createGalleries () {
    this.galeriesElements = document.querySelectorAll('.about__gallery')

    this.galeries = map(this.galeriesElements, (element, index) => {
      return new Gallery({
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
    map(this.galeries, gallery => gallery.show())
  }

  hide () {
    map(this.galeries, gallery => gallery.hide())
  }

  // Events

  onResize (event) {
    map(this.galeries, gallery => gallery.onResize(event))
  }

  onTouchDown (event) {
    map(this.galeries, gallery => gallery.onTouchDown(event))
  }

  onTouchMove (event) {
    map(this.galeries, gallery => gallery.onTouchMove(event))
  }

  onTouchUp (event) {
    map(this.galeries, gallery => gallery.onTouchUp(event))
  }

  onWheel ({ pixelX, pixelY }) {

  }

  // Update

  update (scroll) {
    map(this.galeries, gallery => gallery.update(scroll))
  }

  // Deastroy.

  destroy () {
    map(this.galeries, gallery => gallery.destroy())
  }
}
