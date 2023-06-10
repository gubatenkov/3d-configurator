import {
  Mesh,
  BoxGeometry,
  AudioLoader,
  AudioListener,
  PositionalAudio,
  MeshBasicMaterial,
} from 'three'

import App from '@/app'

export default class AudioManager {
  loader = new AudioLoader()
  listener = new AudioListener()
  music = new PositionalAudio(this.listener)

  constructor() {
    const { scene, camera } = App.getInstance()
    camera.add(this.listener)
    this.loadTrack()
    const mesh = this.getAudioObject()
    scene.add(mesh)
  }

  loadTrack() {
    this.loader.load('/audio/track_02.mp3', (audioBuffer) => {
      this.music.setBuffer(audioBuffer)
      this.music.setRefDistance(30)
    })
  }

  getAudioObject() {
    const mesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshBasicMaterial({ color: 'red', opacity: 0, transparent: true })
    )
    mesh.position.set(15, 0, 0)
    mesh.add(this.music)
    return mesh
  }
}
