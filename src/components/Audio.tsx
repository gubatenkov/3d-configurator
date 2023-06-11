import useSound from 'use-sound'
import { FC, memo, useEffect } from 'react'

import { useAppContext } from '../context'

const Audio: FC<{ sounds: Array<string> }> = memo(
  ({ sounds: [sound1, sound2] }) => {
    const delayMs = 1000
    const { appState } = useAppContext()
    const currentSound = appState === 'presentation' ? sound2 : sound1
    const [playSound, { sound, stop }] = useSound(currentSound, {
      interrupt: true,
      preload: true,
      autoplay: false,
      loop: true,
      volume: 1
    })

    useEffect(() => {
      let soundId: string

      if (sound && appState !== 'pending') {
        soundId = sound.play()

        return () => {
          setTimeout(() => stop(soundId), delayMs)
          sound.fade(1, 0, delayMs, soundId)
        }
      }
    }, [sound, appState])

    return null
  }
)

export default Audio
