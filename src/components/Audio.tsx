import useSound from 'use-sound'
import { FC, memo, useEffect } from 'react'

import { useAppContext } from '../context'

const Audio: FC<{ sounds: Array<string> }> = memo(
  ({ sounds: [sound1, sound2] }) => {
    const delayMs = 500
    const { appState } = useAppContext()
    const currentSound = appState === 'presentation' ? sound2 : sound1
    const currentVolume = appState === 'presentation' ? 0.35 : 1
    const [playSound, { sound, stop }] = useSound(currentSound, {
      interrupt: true,
      preload: true,
      autoplay: false,
      loop: true,
      volume: currentVolume
    })

    useEffect(() => {
      let soundId: string

      if (sound && appState !== 'pending') {
        soundId = sound.play()

        return () => {
          setTimeout(() => stop(soundId), delayMs)
          sound.fade(currentVolume, 0, delayMs, soundId)
        }
      }
    }, [sound, appState, currentVolume])

    return null
  }
)

export default Audio
