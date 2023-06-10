import { memo } from 'react'
import {
  Mesh,
  Color,
  BufferGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial
} from 'three'
import { useAppContext } from '../context'
import useDracoLoader from '../hooks/useDracoLoader'

const Car = memo(() => {
  const { config } = useAppContext()
  const gltf = useDracoLoader('/models/car-compressed.glb')

  gltf.scene.traverse((children) => {
    if (!(children instanceof Mesh)) return
    const mesh = children as Mesh<BufferGeometry, MeshStandardMaterial>

    if (mesh.material.name === 'Mt_Body') {
      mesh.material.color = new Color(config.bodyColor)
    }
    if (mesh.material.name === 'Mt_MirrorCover') {
      mesh.material.color = new Color(config.mirrorsColor)
    }
    if (mesh.material.name === 'Mt_AlloyWheels') {
      mesh.material.color = new Color(config.wheelsColor)
    }
    if (mesh.material.name === 'Mt_BrakeCaliper') {
      mesh.material.color = new Color(config.calipersColor)
    }
    if (
      mesh.name.includes('Mesh_Rim') &&
      !mesh.name.includes(`Mesh_Rim_T0${config.wheelsType}`)
    ) {
      mesh.visible = false
    } else {
      mesh.visible = true
    }
    // Fix shadow color
    if (mesh.material.name === 'Mt_Shadow_Plane') {
      ;(children as Mesh<BufferGeometry, MeshBasicMaterial>).material =
        new MeshBasicMaterial({
          opacity: 0.8,
          color: 0x000000,
          transparent: true,
          map: children.material.map
        })
    }
  })

  return <primitive position={[0, 0, 0]} object={gltf.scene} />
})

export default Car
