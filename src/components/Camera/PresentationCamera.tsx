import { ExposedData } from 'use-sound/dist/types'
import { useEffect, type FC, type ReactNode, memo } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

type Props = {
  children: ReactNode
  soundControls: ExposedData
}

const PresentationCamera: FC<Props> = memo(({ children, soundControls }) => {
  useEffect(() => {
    let id: string
    id = soundControls?.sound?.play()
    return () => soundControls?.stop(id)
  }, [soundControls])

  return (
    <>
      {children}
      <PerspectiveCamera
        position={[-28, 7, 0]}
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
})

export default PresentationCamera
