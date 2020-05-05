import { Scene } from 'phaser'

var Main = {
    preload: function () {
        game.load.spritesheet("JUMP", "./assets/JUMP.png", 128, 256);
        game.load.spritesheet("REROLL", "./assets/REROLL.png", 128, 256);
        game.load.spritesheet("player", "./assets/block.png", 60, 76);
        game.load.image("bg1", "./assets/background1.png");
        game.load.image("ground", "./assets/Ground.png");
        game.load.image("button", "./assets/button.png");
        game.load.image("Trap1", "./assets/Trap1.png");
        game.load.image("Trap2", "./assets/Trap2.png");
        game.load.image("Trap3", "./assets/Trap3.png");
        game.load.image("Trap4", "./assets/Trap4.png");
        game.load.image("NoCard", "./assets/NoCard.png");
        game.load.audio("bgm", "./assets/SEIS_LAVEY.wav");
        game.load.image("Gbutton", "./assets/gogangle.png");

    },
    create: function () {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#1c242e";
        this.start();
        music = game.add.audio('bgm');
        music.play();
    },
    start: function () {
        game.state.start("Play");
    }, 
    goFullScreen: function () {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        if (this.game.scale.isFullScreen) {
            this.game.scale.stopFullScreen();
        } else { this.game.scale.startFullScreen(); }
    }

}
game.state.add("Main", Main);
game.state.start("Main");