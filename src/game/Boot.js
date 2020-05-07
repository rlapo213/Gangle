import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.spritesheet("JUMP", "./assets/JUMP.png", 128, 256);
    this.load.spritesheet("REROLL", "./assets/REROLL.png", 128, 256);
    this.load.spritesheet("player", "./assets/block.png", 60, 76);
    this.load.image("bg1", "./assets/background1.png");
    this.load.image("ground", "./assets/Ground.png");
    this.load.image("button", "./assets/button.png");
    this.load.image("Trap1", "./assets/Trap1.png");
    this.load.image("Trap2", "./assets/Trap2.png");
    this.load.image("Trap3", "./assets/Trap3.png");
    this.load.image("Trap4", "./assets/Trap4.png");
    this.load.image("NoCard", "./assets/NoCard.png");
    this.load.audio("bgm", "./assets/SEIS_LAVEY.wav");
    this.load.image("Gbutton", "./assets/gogangle.png");
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
