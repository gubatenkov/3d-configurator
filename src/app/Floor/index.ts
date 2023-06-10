import {
  Mesh,
  PlaneGeometry,
  SRGBColorSpace,
  RepeatWrapping,
  MeshStandardMaterial,
} from 'three'
import App from '@/app'

export default class Floor extends Mesh<PlaneGeometry, MeshStandardMaterial> {
  constructor() {
    super()
    const { manager } = App.getInstance()
    this.geometry = new PlaneGeometry(200, 200)
    const map = manager.textures.FloorColorMap
    const normalMap = manager.textures.FloorNormalMap
    const alphaMap = manager.textures.FloorOpacityMap
    const roughnessMap = manager.textures.FloorRoughnessMap
    const displacementMap = manager.textures.FloorHeightMap
    // normalize maps
    ;[map, normalMap, displacementMap, roughnessMap, alphaMap].forEach(
      (map) => {
        map.flipY = false
        map.anisotropy = 4
        map.repeat.set(15, 15)
        map.wrapS = RepeatWrapping
        map.wrapT = RepeatWrapping
        map.colorSpace = SRGBColorSpace
      }
    )
    this.material = new MeshStandardMaterial({
      map,
      alphaMap,
      normalMap,
      roughness: 1,
      roughnessMap,
      metalness: 0.1,
      envMapIntensity: 1,
    })
    this.rotation.x = -Math.PI / 2
    this.rotation.z = -Math.PI / 2
    this.position.set(-10, 0, 0)
  }
}
