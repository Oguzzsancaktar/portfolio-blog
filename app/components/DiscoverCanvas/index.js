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
import Background from 'classes/discover/Background'
// Components.

import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Player from 'components/Player'

// Constants.
import { URLS } from '../../../data/URL'
// Pages.
import Visualization from 'pages/visualization'
import Work from 'pages/work'

export default class {
  constructor () {
    AutoBind(this)
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
      this.hideProjects()
    })

    this.elements.push(this.logo)
  }

  // Methods.

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

  async showProjects () {
    await this.hideMenu()

    this.logo.onRoute('/projects')
    await this.visualization.hide()

    this.work.show()
  }

  async hideProjects () {
    await this.work.hide()

    this.logo.onRoute('/discover')
    this.visualization.show()

    this.showMenu()
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
        this.showMenu()

        this.visualization.show()

        this.logo.show()
        this.logo.onRoute('/discover')
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
}
