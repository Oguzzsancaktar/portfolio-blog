import {
  PlaneGeometry,
  Points,
  RepeatWrapping,
  ShaderMaterial,
  TextureLoader
} from 'three'

import GSAP from 'gsap'

import FragmentShader from 'shaders/projects-background-fragment.glsl'
import VertexShader from 'shaders/projects-background-vertex.glsl'

import image from './particle.png'

export default class Background extends Points {
  constructor ({ size }) {
    super()

    this.height = size * 2
    this.width = size * 2

    this.velocity = 0.01

    console.log(2, image, this.texture)

    this.geometryCreate()
    this.textureCreate()
    this.materialCreate()
  }

  geometryCreate () {
    this.geometry = new PlaneGeometry(this.width, this.height, this.height / 8, this.width / 8)

    this.position.z = 1
  }

  textureCreate () {
    this.texture = new TextureLoader().load(image)
    console.log(1, image, this.texture)

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
    console.log('yyy')

    if (route === '/about') {
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
      console.log('xxx')
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
