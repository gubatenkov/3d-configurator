import EventEmitter from 'eventemitter3'

type Event = 'nextFrame'

export default class TimeManager extends EventEmitter<Event> {
  firstFrame = Date.now()
  prevFrame = this.firstFrame
  elapsed = 0
  frameDelta = 16

  constructor() {
    super()
    this.init()
  }

  init() {
    const currentFrame = Date.now()
    this.frameDelta = currentFrame - this.prevFrame
    this.prevFrame = currentFrame
    this.elapsed = this.prevFrame - this.firstFrame
    this.emit('nextFrame')
    requestAnimationFrame(() => this.init())
  }
}
