import { Camera, Renderer, Transform } from 'ogl'

import About from '../Canvas/About'
import Collections from '../Canvas/Collections'
import Home from '../Canvas/Home'
export default class Canvas {
  constructor ({ template }) {
    this.template = template

    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()
  }

  createRenderer () {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true
    })

    this.gl = this.renderer.gl

    document.body.appendChild(this.gl.canvas)
  }

  createCamera () {
    this.camera = new Camera(this.gl)

    this.camera.position.z = 5
  }

  createScene () {
    this.scene = new Transform()
  }

  // Home.
  createHome () {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    })
  }

  destroyHome () {
    if (!this.home) return
    this.home.destroy()
    this.home = null
  }

  // About.
  createAbout () {
    this.about = new About({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    })
  }

  destroyAbout () {
    if (!this.about) return
    this.about.destroy()
    this.about = null
  }

  // Collections.
  createCollections () {
    this.collections = new Collections({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    })
  }

  destroyCollections () {
    if (!this.collections) return
    this.collections.destroy()
    this.collections = null
  }

  // Events
  onPreloaded () {
    this.onChangeEnd(this.template)
  }

  onChangeStart () {
    if (this.about) {
      this.about.hide()
    }

    if (this.collections) {
      this.collections.hide()
    }

    if (this.home) {
      this.home.hide()
    }
  }

  onChangeEnd (template) {
    if (template === 'about') {
      this.createAbout()
    } else if (this.about) {
      this.destroyAbout()
    }

    if (template === 'collections') {
      // this.gl.canvas.style.zIndex = 1000
      this.createCollections()
    } else if (this.collections) {
      // this.gl.canvas.style.zIndex = ''
      this.destroyCollections()
    }

    if (template === 'home') {
      this.createHome()
    } else {
      this.destroyHome()
    }
  }

  onResize () {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.sizes = {
      height,
      width
    }

    const values = {
      sizes: this.sizes
    }

    if (this.about) {
      this.about.onResize(values)
    }

    if (this.collections) {
      this.collections.onResize(values)
    }

    if (this.home) {
      this.home.onResize(values)
    }
  }

  onTouchDown (event) {
    this.isDown = true

    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchDown(values)
    }

    if (this.collections) {
      this.collections.onTouchDown(values)
    }

    if (this.home) {
      this.home.onTouchDown(values)
    }
  }

  onTouchMove (event) {
    if (!this.isDown) return

    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchMove(values)
    }

    if (this.collections) {
      this.collections.onTouchMove(values)
    }

    if (this.home) {
      this.home.onTouchMove(values)
    }
  }

  onTouchUp (event) {
    this.isDown = false

    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchUp(values)
    }

    if (this.home) {
      this.home.onTouchUp(values)
    }
  }

  onWheel (event) {
    if (this.collections) {
      this.collections.onWheel(event)
    }

    if (this.home) {
      this.home.onWheel(event)
    }
  }

  // Loop.

  update (scroll) {
    if (this.about) {
      this.about.update(scroll)
    }

    if (this.collections) {
      this.collections.update()
    }

    if (this.home) {
      this.home.update()
    }

    this.renderer.render({
      camera: this.camera,
      scene: this.scene
    })
  }
}
