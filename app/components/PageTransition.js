import * as THREE from 'three'
import GSAP from 'gsap'

// Shaders.
import fragment from 'shaders/page-transition-fragment.glsl'
import vertex from 'shaders/page-transition-vertex.glsl'

export default class PageTransition {
  constructor () {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.createRenderer()
    this.createScene()

    this.createCamera()

    document.body.appendChild(this.renderer.domElement)

    this.createGeometry()

    this.scene.add(this.triangle)

    this.render()
  }

  createRenderer () {
    const { width, height } = this.sizes

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })

    this.renderer.setPixelRatio(1)
    this.renderer.setSize(width, height)
    this.renderer.setClearColor(0xff00ff, 0)

    this.renderer.domElement.classList.add('page__transition__canvas')
  }

  createCamera () {
    const { width, height } = this.sizes

    this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 100)
    this.camera.lookAt(this.scene.position)
    this.camera.position.z = 1
  }

  createScene () {
    this.scene = new THREE.Scene()
  }

  createGeometry () {
    const { width, height } = this.sizes

    this.geo = new THREE.BufferGeometry()

    const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0])
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2])

    this.geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    this.geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

    this.mat = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,

      uniforms: {
        uProgress: { value: 0 },
        uPower: { value: 0 },
        uOut: { value: true }
      }
    })

    this.triangle = new THREE.Mesh(this.geo, this.mat)
    this.triangle.scale.set(width / 2, height / 2, 1)
    this.triangle.frustumCulled = false
  }

  render = () => {
    this.renderer.render(this.scene, this.camera)
  }

  show = () => {
    const { uProgress, uPower, uOut } = this.mat.uniforms

    const timeline = GSAP.timeline({
      defaults: {
        duration: 1.25,
        ease: 'power3.inOut',
        onUpdate: () => this.render()
      }
    })
    timeline
      .to(uOut, { value: true }, 0)
      .fromTo(uProgress, {
        value: 0
      }, {
        value: 1
      }, 0)
      .fromTo(uPower, {
        value: 0
      }, {
        value: 1,
        ease: 'linear'
      }, 0)
  }

  hide = () => {
    return new Promise((resolve) => {
      const { uProgress, uPower, uOut } = this.mat.uniforms

      const timeline = GSAP.timeline({
        defaults: {
          duration: 1.25,
          ease: 'power3.inOut',
          onUpdate: () => this.render()
        }
      })
      timeline
        .set(uOut, { value: false }, 0)
        .fromTo(uProgress, {
          value: 1
        }, {
          value: 0
        }, 0)
        .fromTo(uPower, {
          value: -1
        }, {
          value: 0,
          ease: 'linear'
        }, 0)

      timeline.call(_ => {
        resolve()
      })
    })
  }

  onResize = () => {
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    const { width, height } = this.sizes

    this.camera.left = width / -2
    this.camera.right = width / 2
    this.camera.top = height / 2
    this.camera.bottom = height / -2
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(width, height)

    this.triangle.scale.set(width / 2, height / 2, 1)
  }
}
