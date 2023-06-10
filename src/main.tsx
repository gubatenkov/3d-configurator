import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { lazy, Suspense, StrictMode, useMemo } from 'react'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

const HUD = lazy(() => import('./components/HUD'))
const Audio = lazy(() => import('./components/Audio'))
const Scene = lazy(() => import('./components/Scene'))
const Camera = lazy(() => import('./components/Camera'))
const Cursor = lazy(() => import('./components/Cursor'))

import sound1 from './data/audio/intro1.ogg'
import sound2 from './data/audio/presentation.mp3'
import { ContextProvider, useAppContext } from './context'

import './styles/main.css'

const sounds = [sound1, sound2]

const Main = () => {
  const { appState } = useAppContext()
  const isAudioAllowed = useMemo(
    () => navigator.userActivation.isActive,
    [navigator.userActivation.isActive]
  )

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
          <Camera>
            <Scene />
          </Camera>
        </Suspense>
      </Canvas>
      {isAudioAllowed && <Audio sounds={sounds} />}
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
