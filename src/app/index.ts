import Scene from '@/app/Scene'
import Camera from '@/app/Camera'
import Renderer from '@/app/Renderer'

import Sizes from '@/utils/Sizes'
import Stats from '@/utils/Stats'
import Controls from '@/utils/Controls'
import Preloader from '@/utils/Preloader'
import TimeManager from '@/utils/TimeManager'
import LoadingManager from '@/utils/LoadingManager'
import AudioManager from '@/utils/AudioManager'

export default class App {
  private static instance: App
  canvas: HTMLCanvasElement
  manager: LoadingManager
  sizes: Sizes
  scene: Scene
  camera: Camera
  renderer: Renderer
  controls: Controls
  timeManager: TimeManager
  stats: Stats
  preloader: Preloader
  audioManager: AudioManager

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance() {
    if (!App.instance) {
      App.instance = new App()
      App.instance.init()
    }
    return App.instance
  }

  private init() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.canvas = document.querySelector('canvas')!
    this.manager = new LoadingManager()
    this.sizes = new Sizes()
    this.scene = new Scene()
    this.timeManager = new TimeManager()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.controls = new Controls()
    this.stats = new Stats()
    this.audioManager = new AudioManager()
    this.preloader = new Preloader()

    this.timeManager.on('nextFrame', () => this.handleUpdates())
    this.sizes.on('windowResize', () => this.handleUpdates())
  }

  private handleUpdates() {
    this.camera.update()
    this.renderer.update()
    this.controls.update()
    this.stats.update()
  }
}
