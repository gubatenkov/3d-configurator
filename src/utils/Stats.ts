import StatsJS from 'stats.js'

export default class Stats {
  panel

  constructor() {
    const stats = new StatsJS()
    this.panel = stats
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
  }

  update() {
    this.panel.update()
  }
}
