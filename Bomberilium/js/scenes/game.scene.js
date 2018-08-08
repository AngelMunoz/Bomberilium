class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.add
      .text(this.sys.game.config.width / 2.1, this.sys.game.config.height / 2.1, 'Game Scene', {
        font: '20px Segoe UI',
        fill: '#0000FF',
      })
      .setScrollFactor(0);
    this.startBtn = this.add.sprite(this.sys.game.config.width / 1.2, this.sys.game.config.height / 1.2, 'Play').setInteractive();
    this.startBtn.on('pointerdown', this.startGame, this);
  }

  startGame() {
    this.scene.stop('GameScene');
    this.scene.stop('BootScene');
    this.scene.start('BootScene');
  }
}

export default GameScene;
