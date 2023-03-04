import * as THREE from 'three'
import GSAP from 'gsap'

// Shaders.
import fragment from 'shaders/page-transition-fragment.glsl'
import vertex from 'shaders/page-transition-vertex.glsl'

const bounds = {
  ww: window.innerWidth,
  wh: window.innerHeight
}

export default class PageTransition {
  constructor () {
    const { ww, wh } = bounds

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })

    this.renderer.setPixelRatio(1)
    this.renderer.setSize(ww, wh)
    this.renderer.setClearColor(0xff00ff, 0)
    this.scene = new THREE.Scene()

    this.camera = new THREE.OrthographicCamera(ww / -2, ww / 2, wh / 2, wh / -2, 1, 100)
    this.camera.lookAt(this.scene.position)
    this.camera.position.z = 1

    this.renderer.domElement.classList.add('page__transition__canvas')
    document.body.appendChild(this.renderer.domElement)

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
    this.triangle.scale.set(ww / 2, wh / 2, 1)
    this.triangle.frustumCulled = false

    this.scene.add(this.triangle)

    this.render()
  }

  render = () => {
    console.log('render call')
    this.renderer.render(this.scene, this.camera)
  }

  show = () => {
    const { uProgress, uPower, uOut } = this.mat.uniforms
    console.log('out', uProgress)

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
  }

  onResize = () => {
    const { ww, wh } = bounds

    this.camera.left = ww / -2
    this.camera.right = ww / 2
    this.camera.top = wh / 2
    this.camera.bottom = wh / -2
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(ww, wh)

    this.triangle.scale.set(ww / 2, wh / 2, 1)
  }
}
