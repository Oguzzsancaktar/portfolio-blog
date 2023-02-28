attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpeed;

varying vec4 vPosition;
varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);

  vec3 p = position;
  p.z = (sin(p.x * 2.0 + uTime) * 0.03 + cos(p.y * 5.0 + uTime) * 0.03);

  vPosition = newPosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
