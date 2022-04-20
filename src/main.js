let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Singleplayer, Multiplayer ], 
  }

let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keyF, keyR, keyLEFT, keyRIGHT; 
let keyW, keyS, keyA, keyD;


//Source Code
//Adam Fuhrman
// Rocket Patrol Mods
// April 19, 2022
// 12 Hours

// Total Points (85)
// Implement a simultaneous two-player mode. In this mode there are two rockets at the same time, each with its own (key) controls, each capable of independent firing. (30)
// Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
// Create a new title screen (e.g., new artwork, typography, layout) (10) 
// Replace the UI borders with new artwork (10)
// Create a new scrolling tile sprite for the background (5)
// Allow the player to control the Rocket after it's fired (5)
// Add your own (copyright-free) background music to the Play scene (5)

// Citation
// * Jim Whitehead (Multiplayer.js, line 42 )
// * Hostiles Inbound [Epic Battle Music – Powerful Orchestral] by Miguel Johnson (https://www.chosic.com/download-audio/29436/) (Menu.js, line 12)
// * https://stackoverflow.com/questions/34210393/looping-audio-in-phaser (Menu.js, lines 44-46)
// * Concept of Singleplayer & Multiplayer being separate scenes by Jonathan Alvarez 
