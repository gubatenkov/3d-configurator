import {
  Fog,
  Color,
  Scene as ThreeScene,
  EquirectangularReflectionMapping,
} from 'three'

import App from '@/app'
import Car from '@/app/Car'
import Floor from '@/app/Floor'

import LoadingManager from '@/utils/LoadingManager'

export default class Scene extends ThreeScene {
  manager: LoadingManager

  constructor() {
    super()
    const { manager } = App.getInstance()
    this.manager = manager
    this.configure()
    this.onAssetsLoaded()
  }

  private onAssetsLoaded() {
    this.manager.on('allAssetsLoaded', () => {
      this.applyEnvTexture()
      this.setObjects()
    })
  }

  private applyEnvTexture() {
    const HDRTexture = this.manager.textures.EnvMapHDR
    HDRTexture.mapping = EquirectangularReflectionMapping
    this.environment = HDRTexture
  }

  private setObjects() {
    this.add(new Floor(), new Car())
  }

  private configure() {
    const color = new Color('black')
    this.fog = new Fog(color, 30, 100)
    this.background = color
  }
}
