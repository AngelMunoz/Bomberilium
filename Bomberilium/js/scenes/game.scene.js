class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.controls = null;

  }

  preload() {

  }

  create() {

    this.startBtn = this.add
      .text(this.sys.game.config.width / 3, this.sys.game.config.height / 3, 'Go to Boot Scene', {
        font: '20px Segoe UI',
        fill: '#00FF00'
      })
      .setInteractive();
    this.startBtn.on('pointerdown', this.startGame, this);
  }

  startGame() {
    this.scene.stop('GameScene');
    this.scene.stop('BootScene');
    this.scene.start('BootScene');
  }
}

export default GameScene;
