import useSound from 'use-sound'
import { memo, useEffect } from 'react'

import { useAppContext } from '../context'
import sound1 from '../data/audio/intro1.mp3'
import sound2 from '../data/audio/presentation.mp3'

const Audio = memo(() => {
  const delayMs = 1000
  const { appState } = useAppContext()
  const currentSound = appState === 'presentation' ? sound2 : sound1
  const [playSound, { sound, stop }] = useSound(currentSound, {
    interrupt: true,
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
})

export default Audio
