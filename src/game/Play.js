import { Scene } from 'phaser'


export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'Play' })
  }

  create () {
    this.add.image(400, 300, 'sky')
    this.add.image(400, 300, 'ground')
    this.add.image(100, 100, 'bg1')
    // this.add.sprite(60,76,'player')

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
