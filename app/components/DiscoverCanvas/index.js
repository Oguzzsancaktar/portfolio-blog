// Libs.
import AutoBind from 'auto-bind'
import {
  Color,
  DirectionalLight,
  MathUtils as THREEMath,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'
// Classes.
import Background from 'classes/discover/Background'
// Components.

import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Player from 'components/Player'

// Pages.
import Visualization from 'pages/visualization'
import Work from 'pages/work'

export default class {
  constructor ({ discover }) {
    AutoBind(this)

    this.discover = discover
    this.elements = []
    this.pages = []

    this.url = ''

    this.height = window.innerHeight
    this.width = window.innerWidth

    // document.body.removeChild(document.querySelector('.discover__wrapper'))

    this.createRenderer()
    this.createScene()
    this.createLights()

    this.createVisualization()

    this.createWork()

    this.createBackground()
    this.createLogo()
    this.createMenu()
    this.createPlayer()
  }

  createMenu () {
    this.menu = new Menu()

    this.menu.on('change', (route) => {
      if (route === '/projects') {
        this.showProjects()
      } else if (route === '/current') {
        this.showDiscover()
      }
    })

    this.elements.push(this.menu)
  }

  createWork () {
    this.work = new Work({
      camera: this.camera,
      renderer: this.renderer,
      size: Math.min(this.size * 0.8, 300)
    })

    this.scene.add(this.work.wrapper)
    this.pages.push(this.work)
  }

  createPlayer () {
    this.player = new Player()

    this.elements.push(this.player)
  }

  createRenderer () {
    this.renderer = new WebGLRenderer()

    this.renderer.setSize(this.width, this.height)

    this.renderer.domElement.classList.add('discover__canvas')

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

    this.logo.on('change', (route) => {
      console.log('logo change ', route)
      this.hideProjects()
      this.hideDiscover()
    })

    this.elements.push(this.logo)
  }

  // Methods.

  async showMenuLogoVisualisation () {
    await this.showMenu()

    this.logo.show()
    this.logo.onRoute('/discover').then(async () => {
      await this.visualization.show()
    })
  }

  async hideLogoAndVisualisation (route = '/discover') {
    this.hideMenu()

    this.logo.onRoute(route)
    await this.visualization.hide()
  }

  async showMenu () {
    this.menu.enable()
    this.player.show()
    await this.menu.show()
  }

  async hideMenu () {
    this.menu.disable()
    this.player.hide()
    await this.menu.hide()
  }

  async showDiscover () {
    this.background.onRoute('/current')
    await this.hideLogoAndVisualisation('/current')
    this.discover.show()
  }

  async hideDiscover () {
    if (this.discover) {
      await this.discover.hide()
      this.showMenuLogoVisualisation()
      this.background.onRoute('/discover')
    }
  }

  async showProjects () {
    await this.hideLogoAndVisualisation('/projects')
    this.work.show()
  }

  async hideProjects () {
    if (this.work) {
      await this.work.hide()
      this.showMenuLogoVisualisation('/projects')
    }
  }

  // Events.
  onResize () {
    this.height = window.innerHeight
    this.width = window.innerWidth

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()

    this.renderer.clear()
    this.renderer.setSize(this.width, this.height)
  }

  onPreloaded (template) {
    if (template === 'discover') {
      setTimeout(() => {
        this.showMenuLogoVisualisation()
      }, 3000)
    }
  }

  // Update
  update () {
    this.renderer.render(this.scene, this.camera)
    this.background.update()
    this.visualization.update()

    this.work.update()
  }

  async destroy () {
    this.work.hide()

    this.discover.hide()

    this.logo.hide()

    await this.hideLogoAndVisualisation()
  }
}
