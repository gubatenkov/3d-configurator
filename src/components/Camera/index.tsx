import type { ExposedData } from 'use-sound/dist/types'
import { lazy, FC, ReactNode, useCallback } from 'react'

import { useAppContext } from '../../context'
const IntroCamera = lazy(() => import('./IntroCamera'))
const PresentationCamera = lazy(() => import('./PresentationCamera'))

type Props = {
  children: ReactNode
  soundControls: Array<ExposedData>
}

const Camera: FC<Props> = ({ children, soundControls: [c1, c2] }) => {
  const { appState } = useAppContext()

  return useCallback(() => {
    switch (appState) {
      case 'intro':
        return <IntroCamera soundControls={c1}>{children}</IntroCamera>
      case 'presentation':
        return (
          <PresentationCamera soundControls={c2}>{children}</PresentationCamera>
        )
      default:
        return children
    }
  }, [appState])()
}

export default Camera
