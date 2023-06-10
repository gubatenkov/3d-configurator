import { lazy, useCallback, useEffect, useState } from 'react'

import { useAppContext } from '../context'
const Panel = lazy(() => import('./Panel'))
const IntroText = lazy(() => import('./IntroText'))
const GithubLink = lazy(() => import('./GithubLink'))
const LoadingScreen = lazy(() => import('./LoadingScreen'))

const DisplayInterface = () => {
  const [isFading, setFading] = useState(true)
  const { appState, startIntro, skipIntro } = useAppContext()

  useEffect(() => {
    setFading(false)
  }, [])

  const withTransition = (callback: (...args: any[]) => any) => {
    return () => {
      // start transition
      setFading(true)
      setTimeout(() => {
        // middleware action
        callback()
        // end transition
        setFading(false)
      }, 3000)
    }
  }

  const Component = useCallback(() => {
    switch (appState) {
      case 'intro':
        return <IntroText onClick={withTransition(skipIntro)} />
      case 'presentation':
        return (
          <>
            <GithubLink />
            <Panel />
          </>
        )
      default:
        return <LoadingScreen onReady={withTransition(startIntro)} />
    }
  }, [appState])

  return (
    <>
      <Component />
      <div className="fade-in-out" style={{ opacity: isFading ? 1 : 0 }} />
    </>
  )
}

export default DisplayInterface
