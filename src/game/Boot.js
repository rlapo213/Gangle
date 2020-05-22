import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import bg1 from "./assets/background1.png"
import ground from "./assets/Ground.png"
import button from "./assets/button.png"
import bgm from "./assets/SEIS_LAVEY.wav"
import player from "./assets/block.png"

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'Boot' })
  }

  preload () {
    this.load.spritesheet("JUMP", "./assets/JUMP.png", 128, 256);
    this.load.spritesheet("REROLL", "./assets/REROLL.png", 128, 256);
    this.load.spritesheet("player", "./assets/block.png",60,76);
    this.load.image("bg1", bg1);
    this.load.image("ground", ground);
    this.load.image("button", button);
    this.load.image("Trap1", "./assets/Trap1.png");
    this.load.image("Trap2", "./assets/Trap2.png");
    this.load.image("Trap3", "./assets/Trap3.png");
    this.load.image("Trap4", "./assets/Trap4.png");
    this.load.image("NoCard", "./assets/NoCard.png");
    this.load.audio("bgm", bgm);
    this.load.image("Gbutton", "./assets/gogangle.png");
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
  }
  goFullScreen() {
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    if (this.game.scale.isFullScreen) {
        this.game.scale.stopFullScreen();
    } else { this.game.scale.startFullScreen(); }
}
  create () {
    this.scene.start('Play')
  }
 
}
