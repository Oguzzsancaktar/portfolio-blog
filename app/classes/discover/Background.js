import {
  PlaneGeometry,
  Points,
  RepeatWrapping,
  ShaderMaterial,
  TextureLoader
} from 'three'

import GSAP from 'gsap'

import FragmentShader from 'shaders/discover-background-fragment.glsl'
import VertexShader from 'shaders/discover-background-vertex.glsl'

export default class Background extends Points {
  constructor ({ size }) {
    super()

    this.height = size * 2
    this.width = size * 2

    this.velocity = 0.01

    this.geometryCreate()
    this.textureCreate()
    this.materialCreate()
  }

  geometryCreate () {
    this.geometry = new PlaneGeometry(this.width, this.height, this.height / 8, this.width / 8)

    this.position.z = 1
  }

  textureCreate () {
    this.texture = new TextureLoader().load('/shared/particle.png')

    this.texture.premultiplyAlpha = true
    this.texture.repeat.set(1, 1)
    this.texture.wrapS = RepeatWrapping
    this.texture.wrapT = RepeatWrapping
  }

  materialCreate () {
    this.material = new ShaderMaterial({
      transparent: true,
      uniforms: {
        image: {
          value: this.texture
        },
        multiplier: {
          value: 0
        },
        time: {
          value: 0
        }
      },
      fragmentShader: FragmentShader,
      vertexShader: VertexShader,
      depthTest: false,
      depthWrite: false
    })
  }

  show () {
    GSAP.to(this.overlay.material, { opacity: 1 })
  }

  hide () {
    GSAP.to(this.overlay.material, { opacity: 0 })
  }

  update () {
    this.material.uniforms.time.value += this.velocity
    // console.log(this.material.uniforms.time.value)
  }

  onRoute (route) {
    console.log('BG route', route)
    if (route === '/current') {
      GSAP.to(this.material.uniforms.multiplier, {
        value: 1
      })

      GSAP.to(this.position, {
        y: -this.height / 4
      })

      GSAP.to(this.rotation, {
        x: -Math.PI / 2
      })

      GSAP.to(this, {
        velocity: 0.005
      })
    } else {
      GSAP.to(this.material.uniforms.multiplier, {
        value: 0
      })

      GSAP.to(this.position, {
        y: 0
      })

      GSAP.to(this.rotation, {
        x: 0
      })

      GSAP.to(this, {
        velocity: 0.01
      })
    }
  }
}
