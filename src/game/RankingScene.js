import { Scene } from 'phaser'


export default class RankingScene extends Scene {
  constructor () {
    super({ key: 'RankingScene' })
  }

  create () {
    this.add.image(400, 300, 'sky')

    const bomb = this.physics.add.image(400, 200, 'bomb')
    bomb.setCollideWorldBounds(true)
    bomb.body.onWorldBounds = true // enable worldbounds collision event
    bomb.setBounce(1)
    bomb.setVelocity(200, 20)

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.75 })
    })
  }

  update () {
  }
}
