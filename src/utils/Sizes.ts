import EventEmitter from 'eventemitter3'

type Event = 'windowResize'

export default class Sizes extends EventEmitter<Event> {
  width: number
  height: number
  aspect: number
  pixelRatio: number

  constructor() {
    super()
    this.calculate()
    this.listenResize()
  }

  private calculate() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }

  private listenResize() {
    window.addEventListener('resize', () => {
      this.calculate()
      this.emit('windowResize')
    })
  }
}
