import type { FC, ReactNode } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

type Props = {
  children: ReactNode
}

const PresentationCamera: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <PerspectiveCamera
        position={[-28, 10, 0]}
        fov={45}
        far={100}
        near={0.1}
        makeDefault
      />
      <OrbitControls
        target={[0, 3, 0]}
        enableZoom={true}
        enableDamping={true}
        minPolarAngle={0.75}
        maxPolarAngle={1.5}
        dampingFactor={0.1}
        rotateSpeed={0.07}
        minDistance={16}
        maxDistance={30}
        autoRotate={true}
        autoRotateSpeed={0.05}
        makeDefault
      />
    </>
  )
}

export default PresentationCamera
