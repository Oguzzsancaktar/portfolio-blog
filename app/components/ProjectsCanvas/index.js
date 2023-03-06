// Libs.
import AutoBind from 'auto-bind'
import { map } from 'lodash'
import {
  Color,
  DirectionalLight,
  MathUtils as THREEMath,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'
// Classes.
import Background from 'classes/projects/Background'
// import { Detection } from 'classes/projects/Detection'
// Pages.
import Visualization from 'pages/visualization'
// Components.
import Logo from 'components/Logo'
import ProjectPreloader from './ProjectPreloader'

export default class {
  constructor () {
    AutoBind(this)
    this.elements = []
    this.pages = []

    this.url = '/projects'

    this.height = window.innerHeight
    this.width = window.innerWidth

    // document.body.removeChild(document.querySelector('.projects__wrapper'))

    // this.createProjectPreloader()

    this.createRenderer()
    this.createScene()
    this.createLights()

    this.createVisualization()

    this.createBackground()

    // this.createLogo()

    this.render()

    console.log('end', this)
  }

  createProjectPreloader () {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        this.projectPreloader = new ProjectPreloader()
        console.log('this.projectPreloader', this.projectPreloader)
      // this.projectPreloader.on('preloaded', this.onPreloaded)
      })
    })
  }

  createRenderer () {
    this.renderer = new WebGLRenderer()

    this.renderer.setSize(this.width, this.height)
    // this.renderer.context.getShaderInfoLog = () => ''

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

  render () {
    this.renderer.render(this.scene, this.camera)

    this.background.update()
    this.visualization.update()

    this.frame = window.requestAnimationFrame(this.render)
  }

  // Update
  update (scroll) {

  }
}
