class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load audio
      this.load.image('starfield3', './assets/starfield3.png');
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
      this.load.audio('sfx_EpicMusic', './assets/EpicMusic.wav'); // Copyright-free music, Hostiles Inbound [Epic Battle Music – Powerful Orchestral] by Miguel Johnson (https://www.chosic.com/download-audio/29436/)
    }

  
  create() {
    this.starfield3 = this.add.tileSprite(0, 0, 640, 480, 'starfield3').setOrigin(0, 0);
    this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x7fffd4).setOrigin(0, 0);
// white borders
    this.add.rectangle(0, 0, game.config.width, borderUISize, 0x7fffd4).setOrigin(0, 0);
    this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x7fffd4).setOrigin(0, 0);
   this.add.rectangle(0, 0, borderUISize, game.config.height, 0x7fffd4).setOrigin(0, 0);
   this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x7fffd4).setOrigin(0, 0);

      let menuConfig = {
          fontFamily: 'Fantasy',
          fontSize: '21px',
          color: '#FFFFFF',
          align: 'right',
          padding: {
            top: 5,
            bottom: 5,
          },
          fixedWidth: 0 
        }

      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
      //this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#7fffd4';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Singleplayer or → for Multiplayer', menuConfig).setOrigin(0.5);
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); 
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT); 
      var music = this.sound.add('sfx_EpicMusic'); 
      music.setLoop(true);
      music.play(); 
      //code source (https://stackoverflow.com/questions/34210393/looping-audio-in-phaser)
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000   
      }
      this.sound.play('sfx_select');
      this.scene.start("singleplayerScene");    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000    

      }
      this.sound.play('sfx_select');
      this.scene.start("multiplayerScene"); 


    }
  }
} 