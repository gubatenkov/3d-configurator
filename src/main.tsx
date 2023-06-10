import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { lazy, Suspense, StrictMode, memo } from 'react'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'

import useAudio from './hooks/useAudio'
const HUD = lazy(() => import('./components/HUD'))
const Scene = lazy(() => import('./components/Scene'))
const Camera = lazy(() => import('./components/Camera'))
const Cursor = lazy(() => import('./components/Cursor'))

import { ContextProvider, useAppContext } from './context'

import './styles/main.css'

const Main = memo(() => {
  useAudio()
  const { appState } = useAppContext()

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
      <Cursor />
      <HUD />
    </div>
  )
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ContextProvider>
      <Main />
    </ContextProvider>
  </StrictMode>
)
