/* eslint-disable @typescript-eslint/no-non-null-assertion */
import App from '@/app'

export default class Preloader {
  backdrop = document.querySelector<HTMLDivElement>('.backdrop')!
  progressWraper = document.querySelector<HTMLDivElement>('.progress')!
  progress = document.querySelector<HTMLDivElement>('.progress-value')!
  button = document.querySelector<HTMLButtonElement>('.btn')!

  constructor() {
    const { manager, audioManager } = App.getInstance()

    manager.on('singleAssetLoaded', () => {
      this.progress.style.width = `${(manager.current / manager.total) * 100}%`
    })

    manager.on('allAssetsLoaded', () => {
      setTimeout(() => {
        this.progressWraper.style.visibility = 'hidden'
        this.button.style.visibility = 'visible'
      }, 1000)
      this.button.onclick = () => {
        this.backdrop.style.opacity = '0'
        this.button.style.pointerEvents = 'none'
        audioManager.music.play()
      }
    })
  }
}
