import BootScene from '/js/scenes/boot.scene.js';
import GameScene from '/js/scenes/game.scene.js';

window.PHASER_GAME = new Phaser.Game({
  type: Phaser.WEB_GL,
  pixelArt: true,
  parent: 'game',
  scene: [
    BootScene,
    GameScene
  ]
});
