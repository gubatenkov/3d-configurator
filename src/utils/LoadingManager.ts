import EventEmitter from 'eventemitter3'
import { Texture, TextureLoader } from 'three'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { Asset, data } from '@/data'

type Event = 'allAssetsLoaded' | 'singleAssetLoaded'

export type ExtractAsset<T extends Asset['type']> = Extract<Asset, { type: T }>

export default class LoadingManager extends EventEmitter<Event> {
  models = {} as Record<ExtractAsset<'glb'>['name'], GLTF>
  textures = {} as Record<ExtractAsset<'hdr' | 'jpg'>['name'], Texture>
  loaders = {} as {
    glb: GLTFLoader
    jpg: TextureLoader
    hdr: RGBELoader
  }

  total = data.length
  current = 0

  constructor() {
    super()
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/examples/jsm/loaders/draco/')
    gltfLoader.setDRACOLoader(dracoLoader)
    this.loaders.glb = gltfLoader
    this.loaders.hdr = new RGBELoader()
    this.loaders.jpg = new TextureLoader()
    this.startAssetLoading()
  }

  private handleDefaultAssetLoaded(result: GLTF | Texture, asset: Asset) {
    if (asset.type === 'glb') {
      this.models[asset.name] = result as GLTF
    }

    if (asset.type === 'jpg' || asset.type === 'hdr') {
      this.textures[asset.name] = result as Texture
    }

    this.current++

    this.current === this.total
      ? this.emit('allAssetsLoaded')
      : this.emit('singleAssetLoaded')
  }

  private startAssetLoading() {
    data.forEach((asset: Asset) => {
      this.loaders[asset.type].load(asset.path, (result) =>
        this.handleDefaultAssetLoaded(result, asset)
      )
    })
  }
}
