import { Camera, Renderer, Transform, Box, Program, Mesh } from 'ogl'

import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

export default class Canvas {
  constructor () {
    this.createRenderer()
    this.createCamera()
    this.createScene()
    this.createCube()
  }

  createRenderer () {
    this.renderer = new Renderer()

    this.gl = this.renderer.gl

    document.body.append(this.gl.canvas)
  }

  createCamera () {
    this.camera = new Camera(this.gl)
    this.camera.position.z = 5
  }

  createScene () {
    this.scene = new Transform()
  }

  createCube () {
    this.geometry = new Box(this.gl)

    this.program = new Program(this.gl, {
      vertex,
      fragment
    })

    this.mesh = new Mesh(this.gl, { geometry: this.geometry, program: this.program })
    this.mesh.setParent(this.scene)
  }

  onResize () {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    })
  }

  update () {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01

    this.renderer.render({ scene: this.scene, camera: this.camera })
  }
}
