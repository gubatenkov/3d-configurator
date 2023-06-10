import { ACESFilmicToneMapping, Color, Scene, WebGLRenderer } from 'three'

import App from '@/app'
import Camera from '@/app/Camera'

import Sizes from '@/utils/Sizes'

export default class Renderer extends WebGLRenderer {
  scene: Scene
  sizes: Sizes
  camera: Camera
  pixelRatio: number
  canvas: HTMLCanvasElement

  constructor() {
    const { sizes, scene, camera, canvas } = App.getInstance()
    super({
      antialias: true,
      canvas,
    })
    this.sizes = sizes
    this.scene = scene
    this.camera = camera
    this.canvas = canvas
    this.pixelRatio = sizes.pixelRatio
    this.toneMapping = ACESFilmicToneMapping
    this.toneMappingExposure = 1
    this.update()
  }

  update() {
    this.setClearColor(new Color('black'), 1)
    this.setSize(this.sizes.width, this.sizes.height)
    this.setPixelRatio(this.pixelRatio)
    this.render(this.scene, this.camera)
  }
}
