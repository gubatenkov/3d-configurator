import { BufferGeometry, Group, Mesh, MeshBasicMaterial } from 'three'

import App from '@/app'

export default class Car extends Group {
  constructor() {
    super()
    const { manager } = App.getInstance()
    const car = manager.models.Lambo.scene
    this.position.set(0, 0, 0)
    this.fixShadow(car)
    this.add(car)
  }

  fixShadow(scene: Group) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const shadow = scene.children[0].children.find(
      (c) => c.name === 'Obj_Shadow_Plane'
    )! as Mesh<BufferGeometry, MeshBasicMaterial>
    shadow.material = new MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      map: shadow.material.map,
    })
  }
}
