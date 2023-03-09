// Libs.
import AutoBind from 'auto-bind'
import { compact, each, map } from 'lodash'
import {
  Color,
  DirectionalLight,
  MathUtils as THREEMath,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'
// Classes.
import Background from 'classes/projects/Background'
// Components.
import Logo from 'components/Logo'
// Constants.
import { URLS } from '../../../data/URL'
// Pages.
import Visualization from 'pages/visualization'

export default class {
  constructor () {
    AutoBind(this)
    this.elements = []
    this.pages = []

    this.url = ''

    this.height = window.innerHeight
    this.width = window.innerWidth

    // document.body.removeChild(document.querySelector('.projects__wrapper'))

    this.createRenderer()
    this.createScene()
    this.createLights()

    this.createVisualization()
    this.createLogo()

    this.createBackground()
  }

  createRenderer () {
    this.renderer = new WebGLRenderer()

    this.renderer.setSize(this.width, this.height)

    this.renderer.domElement.classList.add('projects__canvas')

    document.body.appendChild(this.renderer.domElement)
  }

  createScene () {
    this.scene = new Scene()

    this.camera = new PerspectiveCamera(45, this.width / this.height, 1, 10000)
    this.camera.position.z = 300

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()

    this.camera.position.z = 300

    const distance = this.camera.position.z
    const fov = THREEMath.degToRad(this.camera.fov)
    const height = 2 * Math.tan(fov / 2) * distance
    const width = height * this.camera.aspect

    this.size = width
  }

  createLights () {
    this.lightColor = new Color('#fff')

    this.lightOne = new DirectionalLight(this.lightColor, 1)
    this.lightOne.position.set(1, 1, 1)

    this.lightTwo = new DirectionalLight(this.lightColor, 1)
    this.lightTwo.position.set(-1, -1, 1)

    this.scene.add(this.lightOne)
    this.scene.add(this.lightTwo)
  }

  createVisualization () {
    this.visualization = new Visualization()

    this.scene.add(this.visualization.wrapper)

    this.pages.push(this.visualization)
  }

  createBackground () {
    this.background = new Background({
      size: this.size
    })

    this.scene.add(this.background)

    this.elements.push(this.background)
  }

  createLogo () {
    this.logo = new Logo()

    this.elements.push(this.logo)
  }

  // Events.

  onChange (url, push = true) {
    if (this.isAnimating || this.url === url) return

    if (URLS.indexOf(url) === -1) {
      url = '/'
    }

    this.isAnimating = true

    this.logo.disable()

    let promises = map(this.pages, page => {
      if ((page.url !== '/' && this.url.indexOf(page.url) !== -1) || page.url === this.url) {
        return page.hide()
      }
    })

    promises = compact(promises)

    each(this.elements, element => {
      element.onRoute(url)
    })

    this.url = url

    Promise.all(promises).then(() => {
      this.isAnimating = false

      this.logo.enable()

      // each(this.pages, page => {
      //   console.log('page', page)
      //   if ((page.url !== '/' && url.indexOf(page.url) !== -1) || page.url === url) {
      //     console.log(111)
      //     page.show()
      //   }
      // })

      if (push) {
        window.history.pushState({ page: this.url }, 'Oguz Taha Sancaktar — Creative Front End Developer', this.url)
      }

      if (this.cursor) {
        this.cursor.update()
      }
    })
  }

  onResize () {
    this.height = window.innerHeight
    this.width = window.innerWidth

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()

    this.renderer.clear()
    this.renderer.setSize(this.width, this.height)
  }

  // Update
  update () {
    this.renderer.render(this.scene, this.camera)
    this.background.update()
    this.visualization.update()
  }
}
