import useSound from 'use-sound'
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { lazy, Suspense, StrictMode } from 'react'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

import audio1 from './data/audio/intro1.mp3'
import audio2 from './data/audio/presentation2.mp3'

import HUD from './components/HUD'
const Scene = lazy(() => import('./components/Scene'))
const Camera = lazy(() => import('./components/Camera'))
const Cursor = lazy(() => import('./components/Cursor'))

import { ContextProvider, useAppContext } from './context'

import './styles/main.css'

const Main = () => {
  const { appState } = useAppContext()
  const [playSound1, soundControls1] = useSound(audio1, {
    volume: 1,
    loop: false,
    autoplay: false
  })
  const [playSound2, soundControls2] = useSound(audio2, {
    loop: true,
    volume: 0.35,
    autoplay: false
  })

  return (
    <div className="main">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          outputColorSpace: SRGBColorSpace,
          toneMapping: ACESFilmicToneMapping
        }}
        frameloop={appState === 'presentation' ? 'demand' : 'always'}>
        <Suspense fallback={null}>
          <Camera soundControls={[soundControls1, soundControls2]}>
            <Scene />
          </Camera>
        </Suspense>
      </Canvas>
      <Cursor />
      <HUD />
    </div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ContextProvider>
      <Main />
    </ContextProvider>
  </StrictMode>
)
