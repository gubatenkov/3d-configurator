import { lazy, memo } from 'react'
import { Environment } from '@react-three/drei'

const Car = lazy(() => import('./Car'))
const Stage = lazy(() => import('./Stage'))

const Scene = memo(() => {
  return (
    <>
      <fog attach={'fog'} color={0x000000} near={30} far={100} />
      <color attach="background" args={[0x000000]} />
      <Environment files="/textures/royal_esplanade_1k.hdr" />

      {/* Progressive loading state */}
      <Stage>
        {/* <Suspense fallback={<LowpolyCar />}> */}
        <Car />
        {/* </Suspense> */}
      </Stage>
    </>
  )
})

export default Scene
