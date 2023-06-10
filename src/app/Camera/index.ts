import { PerspectiveCamera } from 'three'

import App from '@/app'

export default class Camera extends PerspectiveCamera {
  sizes
  scene

  constructor() {
    const { scene, sizes } = App.getInstance()
    super(45, sizes.aspect, 0.1, 100)
    this.sizes = sizes
    this.scene = scene
    this.aspect = sizes.aspect
    this.configure()
  }

  private configure() {
    this.position.set(-45, 15, 0)
    this.lookAt(0, 0, 0)
    this.scene.add(this)
  }

  update() {
    this.aspect = this.sizes.aspect
    this.updateProjectionMatrix()
  }
}
