import type { FC, ReactNode } from 'react'

import { useLoader } from '@react-three/fiber'
import { RepeatWrapping, SRGBColorSpace, TextureLoader } from 'three'

type StageProps = {
  children: ReactNode
}

const Stage: FC<StageProps> = ({ children }) => {
  const maps = useLoader(TextureLoader, [
    '/textures/ao.jpg',
    '/textures/albedo.jpg',
    '/textures/normal.jpg',
    '/textures/roughness.jpg'
  ])

  maps.forEach((map) => {
    map.repeat.set(10, 10)
    map.wrapS = RepeatWrapping
    map.wrapT = RepeatWrapping
    map.colorSpace = SRGBColorSpace
  })

  const [aoMap, colorMap, normalMap, roughnessMap] = maps

  return (
    <>
      {children}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / -2, 0, 0]}>
        <planeGeometry args={[175, 175]} />
        <meshStandardMaterial
          color={'black'}
          aoMap={aoMap}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </>
  )
}
export default Stage
