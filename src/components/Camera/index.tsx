import { lazy, FC, ReactNode } from 'react'

import { useAppContext } from '../../context'
const IntroCamera = lazy(() => import('./IntroCamera'))
const PresentationCamera = lazy(() => import('./PresentationCamera'))

type Props = {
  children: ReactNode
}

const Camera: FC<Props> = ({ children }) => {
  const { appState } = useAppContext()

  return appState === 'intro' ? (
    <IntroCamera>{children}</IntroCamera>
  ) : (
    <PresentationCamera>{children}</PresentationCamera>
  )
}

export default Camera
