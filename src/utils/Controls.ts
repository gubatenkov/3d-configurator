import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import App from '@/app'

export default class Controls extends OrbitControls {
  constructor() {
    const { camera, renderer } = App.getInstance()
    super(camera, renderer.domElement)
    this.enablePan = false
    this.enableZoom = true
    this.enableDamping = true
    this.minPolarAngle = 0.75
    this.maxPolarAngle = 1.5
    this.dampingFactor = 0.1
    this.rotateSpeed = 0.07
    this.minDistance = 16
    this.maxDistance = 32
    this.autoRotate = true
    this.autoRotateSpeed = 0.05
  }
}
