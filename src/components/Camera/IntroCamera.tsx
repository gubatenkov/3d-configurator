import { motion } from 'framer-motion-3d'
import { ExposedData } from 'use-sound/dist/types'
import { useAnimationControls } from 'framer-motion'
import { PerspectiveCamera } from '@react-three/drei'
import { FC, ReactNode, useState, useEffect } from 'react'

import { motions } from '../../data'

type Props = {
  children: ReactNode
  soundControls: ExposedData
}

const Intro: FC<Props> = ({ children, soundControls }) => {
  const delayMs = 500
  const controls = useAnimationControls()
  const [currentMotion, setCurrentMotion] = useState(0)

  useEffect(() => {
    const id = soundControls?.sound?.play()
    return () => {
      setTimeout(() => soundControls?.stop(id), delayMs)
      soundControls?.sound?.fade(1, 0, delayMs, id)
    }
  }, [soundControls])

  useEffect(() => {
    handleMotion()
  }, [currentMotion])

  async function handleMotion() {
    // Controls allow to skip unnecessary
    // transitions between motions
    controls.set(motions[currentMotion].from)
    // wait for the end of the current motion
    await controls.start(motions[currentMotion].to)
    // then show next motion or begin from start
    setCurrentMotion((prev) => {
      return prev === motions.length - 1 ? 0 : prev + 1
    })
  }

  return (
    <>
      {children}
      <motion.group
        animate={controls}
        transition={{
          duration: motions[currentMotion].duration,
          ease: 'linear'
        }}>
        <PerspectiveCamera fov={45} far={100} near={0.1} makeDefault />
      </motion.group>
    </>
  )
}

export default Intro
