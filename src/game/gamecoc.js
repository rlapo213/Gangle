import Phaser from 'phaser'
import BootScene from './Boot'
import PlayScene from './main'
import GangleScene from './GangleScene'
import RankingScene from './Ranking'
import DeadScene from './Dead'

//Gangle -> Boot -> Play -> Dead -> Ranking


function launch(containerId) {
    return new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: containerId,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
             y: 300 
            },
          debug: false
        }
      },
      scene: [BootScene, PlayScene, GangleScene, RankingScene, DeadScene]
    })
  }
  
  export default launch
  export { launch }

var game = new Phaser.Game(1200, 675, Phaser.CANVAS, "GameDiv");
var text;
var score;
var scoreText;


class Player {
    constructor(){
        this.setBG = 0;
        this.sprite = game.add.sprite(0, 575, "player");
        this.sprite.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.sprite);
        this.key = game.input.keyboard.createCursorKeys();
        this.sprite.animations.add('move', [0, 1], 10, true);
        this.moveSpeed= 4.5;
        this.jumpSpeed= 10;
        this.setUI = 0;
        this.hp = 3;
        this.sprite.enableBody = true;
        this.isJumping = false;
        game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 800;
        this.sprite.body.collideWorldBounds = true;
    }
    update() {
        this.sprite.x += this.moveSpeed;
        this.setUI += this.moveSpeed;
        this.setBG += this.moveSpeed;
        score+=0.1;
        if(this.setUI >= 600){
            this.setUI = 0;
            for(var i =0; i<cards.length; i++){
                cards[i].x += 600;
        }
    }
    }
}

class System {
    constructor(){
        this.spawnDelay = 3000;
        this.spawnTime = game.time.now + this.spawnDelay;
       
    }
    update(){
        if(game.time.now >= this.spawnTime){
            this.spawnTime = game.time.now + this.spawnDelay;
        }
    }
}

function collision(_player, _jumptrap){
        game.state.start("End");
        player.moveSpeed = 0;
        player.x = 0;
}
function collider(){
        console.log("COLLIDER SEARCHING");
        game.physics.arcade.overlap(player.sprite, JumpTrap,collision ,null, this);
    }

var cardTime;
var cardTimeOn = false;
var cardDestroyAble = true;
var player;
var bullets = [];
var system;
let platforms;
var canSlide = true;
var canJump = true;
let cards = [4];
var canInput = true;
var firstJumpPower;
var secondJumpPower;
let jumpButton;
let slideButton;
let rerollButton;
var cardGroup;
var stopTime;
let random3;
var play = {
    create : function(){
        stopTime = game.time.now;
        game.world.setBounds(0, 0, 222222, 675);
        cardTimeOn = false;
        cardDestroyAble = true;
        canSlide = true;
        var a = game.add.sprite(0, 0, 'bg1');
        a.scale.setTo(0.3, 0.3);
        var b = game.add.sprite(2400, 0, 'bg1');
        b.scale.setTo(-0.3, 0.3);
        var c = game.add.sprite(2400, 0, 'bg1');
        c.scale.setTo(0.3, 0.3);
        var d = game.add.sprite(4800, 0, 'bg1');
        d.scale.setTo(-0.3, 0.3);
        var e = game.add.sprite(4800, 0, 'bg1');
        e.scale.setTo(0.3, 0.3);
        var f = game.add.sprite(7200, 0, 'bg1');
        f.scale.setTo(-0.3, 0.3);
        var g = game.add.sprite(7200, 0, 'bg1');
        g.scale.setTo(0.3, 0.3);


        JumpTrap = game.add.group();
        JumpTrap.enableBody = true;
        JumpTrap.create(1000, game.world.height-130, 'Trap1')
        JumpTrap.create(1350, game.world.height-130, 'Trap1')
        JumpTrap.create(1600, game.world.height-150, 'Trap2')
        JumpTrap.create(1900, game.world.height-150, 'Trap2')
        JumpTrap.create(2200, game.world.height-300, 'Trap4')
        JumpTrap.create(2800, game.world.height-230, 'Trap3')
        JumpTrap.create(3100, game.world.height-130, 'Trap1')
        JumpTrap.create(3500, game.world.height-150, 'Trap2')
        JumpTrap.create(4100, game.world.height-230, 'Trap3')
        JumpTrap.create(4600, game.world.height-230, 'Trap3')
        JumpTrap.create(5000, game.world.height-130, 'Trap1')
        JumpTrap.create(5150, game.world.height-150, 'Trap2')
        JumpTrap.create(5350, game.world.height-150, 'Trap2')
        JumpTrap.create(5600, game.world.height-300, 'Trap4')
        JumpTrap.create(5700, game.world.height-230, 'Trap3')
        JumpTrap.create(6000, game.world.height-130, 'Trap1')
        JumpTrap.create(6200, game.world.height-300, 'Trap4')
        JumpTrap.create(6300, game.world.height-230, 'Trap3')
        JumpTrap.create(6700, game.world.height-130, 'Trap1')
        JumpTrap.create(7000, game.world.height-230, 'Trap3')
        JumpTrap.create(7100, game.world.height-130, 'Trap1')
        JumpTrap.create(7200, game.world.height-300, 'Trap4')
        JumpTrap.create(7350, game.world.height-130, 'Trap1')
        JumpTrap.create(7450, game.world.height-300, 'Trap4')
        cards[0] = game.add.sprite(0, 200, 'JUMP');
        cards[1] = game.add.sprite(200, 200, 'REROLL');
        cards[2] = game.add.sprite(400, 200, 'JUMP');
        canJump = true;
        this.reroll();
        platforms = game.add.group();
        cardGroup = game.add.group();
        platforms.enableBody = true;
        
        let ground = platforms.create(0, game.world.height-64, 'ground');
        ground.body.immovable = true;
        ground.scale.setTo(200, 2);
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#1c242e";
        player = new Player();
        player.sprite.animations.play('move');
        system = new System();
        game.camera.follow(player.sprite);
        for(var i = 0; i<cards.length; i++){
            game.physics.arcade.enable(cards[i]);
        }
        score = 0;
       
    },
    update : function(){
       player.update();
       system.update();
       collider();
       console.log(player.key.up.justDown);
       game.physics.arcade.collide(player.sprite, platforms);
       game.physics.arcade.collide(JumpTrap, platforms);
       game.physics.arcade.collide(player.sprite, JumpTrap);
       if(player.sprite.x >= 7800){
           player.sprite.x = 600;
           player.moveSpeed += 1;
           for(var i =0; i<cards.length; i++){
            cards[i].x -= 7200;
    }
       }
       if(player.key.down.isUp &&player.key.up.isUp && player.key.right.isUp && player.key.left.isUp){
           canInput =true;
       }
        //-----------------------------------------------------------
       if(player.key.up.isDown && canJump && jumpButton == 1 && canInput){ 
           console.log("now " + game.time.now);
           console.log("stop " + stopTime);
           if(firstJumpPower == 1){
            player.sprite.body.velocity.y = -500;
           }
           else{
            player.sprite.body.velocity.y = -600;
           }
           canJump = false;
           canInput = false;
           cards[0].frame = 4;
       }
       else if(player.key.down.isDown && canJump && jumpButton == 2 && canInput){
        if(firstJumpPower == 1){
            player.sprite.body.velocity.y = -500;
           }
           else{
            player.sprite.body.velocity.y = -600;
           }
            console.log("now " + game.time.now);
           console.log("stop " + stopTime);
           canJump = false;
           canInput = false;
           cards[0].frame = 4;
        }
        else if(player.key.left.isDown && canJump && jumpButton == 0 && canInput){
            console.log("now " + game.time.now);
           console.log("stop " + stopTime);
           if(firstJumpPower == 1){
            player.sprite.body.velocity.y = -500;
           }
           else{
            player.sprite.body.velocity.y = -600;
           }
            cards[0].frame = 4;
           canJump = false;
           canInput = false;
        }
        else if(player.key.right.isDown && canJump && jumpButton == 3 && canInput){
            console.log("now " + game.time.now);
           console.log("stop " + stopTime);
           if(firstJumpPower == 1){
            player.sprite.body.velocity.y = -500;
           }
           else{
            player.sprite.body.velocity.y = -600;
           }
           canJump = false;
           canInput = false;
           cards[0].frame = 4;
         }

         //-----------------------------------------------------------
         if(player.key.up.isDown &&rerollButton == 1 && canInput ){
            this.reroll();
            canInput = false;
        }
        else if(player.key.down.isDown && rerollButton == 2 && canInput){
            this.reroll();
            canInput = false;
         }
         else if(player.key.left.isDown  && rerollButton == 0 && canInput){
            this.reroll();
            canInput = false;
         }
         else if(player.key.right.isDown &&rerollButton == 3 && canInput){
            this.reroll();
            canInput = false;
          }
           //-----------------------------------------------------------
        if(random3 == 1){
            if(cards[2].frame < 9){
            if(secondJumpPower == 1){
                player.sprite.body.velocity.y = -500;
               }
               else{
                player.sprite.body.velocity.y = -600;
               }
            canSlide = false;
            canInput= false;
            cards[2].frame = 4;
        }
        else if(player.key.down.isDown  && slideButton  == 2 && canInput && canSlide){
            if(secondJumpPower == 1){
                player.sprite.body.velocity.y = -500;
               }
               else{
                player.sprite.body.velocity.y = -600;
               }
             canSlide = false;
             canInput = false;
            cards[2].frame = 4;
         }
         else if(player.key.left.isDown &&slideButton  == 0 && canInput && canSlide){
            if(secondJumpPower == 1){
                player.sprite.body.velocity.y = -500;
               }
               else{
                player.sprite.body.velocity.y = -600;
               }
             cards[2].frame = 4;
             canSlide = false;
             canInput =false;
         }
         else if(player.key.right.isDown && slideButton == 3 && canInput && canSlide){
            if(secondJumpPower == 1){
                player.sprite.body.velocity.y = -500;
               }
               else{
                player.sprite.body.velocity.y = -600;
               }
             canSlide = false;
             canInput =false;
            cards[2].frame = 4;
          }
        }
        else {
            if(player.key.up.isDown  && slideButton  == 1 && canInput && canSlide){
                game.state.start("End");
            }
            else if(player.key.down.isDown  && slideButton  == 2 && canInput && canSlide){
                game.state.start("End");
            }
            else if(player.key.left.isDown &&slideButton  == 0 && canInput && canSlide){
                game.state.start("End");
            }
            else if(player.key.right.isDown && slideButton == 3 && canInput && canSlide){
                game.state.start("End");
            }
    }
    },
    reroll : function(){
        stopTime = game.time.now += 20;
        canJump = true;
        canSlide = true;
        let random = Math.floor(Math.random()*4);
        let random2 = Math.floor(Math.random()*2);
        //made card
        console.log(random);
        switch(random){
            case 0:
                jumpButton = 0;
                cards[0].frame = 0;
                if(random2 == 1){
                    cards[0].frame = 5;
                    firstJumpPower = 1;
                }
                else{
                    firstJumpPower = 2;
                }
                break;
            case 1:
                jumpButton = 1;
                cards[0].frame = 1;
                if(random2 == 1){
                    cards[0].frame = 6;
                    firstJumpPower = 1;
                }
                else{
                    firstJumpPower = 2;
                }
                break;
            case 2:
                jumpButton = 2;
                cards[0].frame = 2;
                if(random2 == 1){
                    cards[0].frame = 7;
                    firstJumpPower = 1;
                }
                else{
                    firstJumpPower = 2;
                }
                break;
            case 3:
                jumpButton = 3;
                cards[0].frame = 3;
                if(random2 == 1){
                    cards[0].frame = 8;
                    firstJumpPower = 1;
                }
                else{
                    firstJumpPower = 2;
                }
                break;
        }
        random = Math.floor(Math.random()*3);
        switch(random){
            case 0:
                if(jumpButton != 0){
                    rerollButton = 0;
                    cards[1].frame = 0;
                }
                else
                {
                    rerollButton = 1;
                    cards[1].frame = 1;
             }
                    break;
            case 1:
                    if(jumpButton != 1)
                    {rerollButton = 1;
                        cards[1].frame = 1;
                    }
                else
                    {
                        rerollButton = 2;
                        cards[1].frame = 2;
                    }
                    break;
            case 2:
                    if(jumpButton != 2)
                    {
                        rerollButton = 2;
                        cards[1].frame = 2;
                    }
                else
                   {
                        rerollButton = 3;
                        cards[1].frame = 3;
                    }
                    break;
        }
        random = Math.floor(Math.random()*2);
        random2 = Math.floor(Math.random()*2);
        random3 = Math.floor(Math.random()*2);
        switch(random){
            case 0:
                if(jumpButton != 0 && rerollButton != 0 )
                    {
                        slideButton = 0;
                        if(random2 == 1 && random3 == 1){
                            cards[2].frame = 5;
                            secondJumpPower = 1;
                        }
                        else if(random3 == 1){
                            cards[2].frame = 0;
                            secondJumpPower = 2;
                        }
                        else if(random3 == 0){
                            cards[2].frame = 9;
                        }
                       
                    }
                else if(jumpButton != 1 && rerollButton != 1)
                    {   
                    slideButton = 1;
                    if(random2 == 1){
                        cards[2].frame = 6;
                        secondJumpPower = 1;
                    }
                    else if(random3 == 1){
                        cards[2].frame = 1;
                        secondJumpPower = 2;
                    }
                    else if(random3 == 0){
                        cards[2].frame = 10;
                    }
                    }
                else 
                    {
                    slideButton = 2;
                    if(random2 == 1 && random3 == 1){
                        cards[2].frame = 7;
                        secondJumpPower = 1;
                    }
                    else if(random3 == 1){
                        cards[2].frame = 2;
                        secondJumpPower = 2;
                    }
                    else if(random3 == 0){
                        cards[2].frame = 11;
                    }
                }
                    break;
                    
            case 1:
                    if(jumpButton != 1 && rerollButton != 1 ){
                    slideButton = 1;
                    if(random2 == 1 && random3 == 1){
                        cards[2].frame = 6;
                        secondJumpPower = 1;
                    }
                    else if(random3 == 1){
                        cards[2].frame = 1;
                        secondJumpPower = 2;
                    }
                    else if(random3 == 0){
                        cards[2].frame = 10;
                    }
                    }
                else if(jumpButton != 2 && rerollButton != 2){
                    slideButton = 2;
                    if(random2 == 1 && random3 == 1){
                        cards[2].frame = 7;
                        secondJumpPower = 1;
                    }
                    else if(random3 == 1){
                        cards[2].frame = 2;
                        secondJumpPower = 2;
                    }
                    else if(random3 == 0){
                        cards[2].frame = 11;
                    }
                }
                else {
                    slideButton = 3;
                    if(random2 == 1 && random3 == 1){
                        cards[2].frame = 8;
                        secondJumpPower = 1;
                    }
                    else if(random3 == 1){
                        cards[2].frame = 3;
                        secondJumpPower = 2;
                    }
                    else if(random3 == 0){
                        cards[2].frame = 12;
                    }
                }
                break;
           
        }
        let attackButton;
        if(jumpButton != 0 && rerollButton != 0 &&   slideButton != 0)
                attack = 0;
        else if(jumpButton != 1 && rerollButton != 1 &&   slideButton != 1)
                attack = 1;
        else if(jumpButton != 2 && rerollButton != 2 &&   slideButton != 2)
                attack = 2;
        else if(jumpButton != 3 && rerollButton != 3 &&   slideButton != 3)
                attack = 2;   
        for(var i = 0; i<cards.length; i++){
            cards[i].enableBody = true;
        }
    }

}
    game.state.add("Play", play);