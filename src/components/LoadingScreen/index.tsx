import { useProgress } from '@react-three/drei'
import { FC, lazy, useEffect, useState } from 'react'

const Button = lazy(() => import('./Button'))
const Progress = lazy(() => import('./Progress'))

type Props = {
  onReady: () => void
}

const LoadingScreen: FC<Props> = ({ onReady }) => {
  const { progress } = useProgress()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const handleKeyPress = () => {
      if (progress === 100) onReady()
    }
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [progress])

  useEffect(() => {
    let timeoutId: number
    if (progress === 100) {
      timeoutId = setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
    return () => clearInterval(timeoutId)
  }, [progress])

  return (
    <div className="preloader">
      <div className="preloader-logo__wrap">
        {isLoading ? (
          <Progress progress={progress} />
        ) : (
          <Button onClick={onReady} />
        )}
      </div>
    </div>
  )
}

export default LoadingScreen
