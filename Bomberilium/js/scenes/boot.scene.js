class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create() {
    // Help text that has a 'fixed' position on the screen
    this.add
      .text(this.sys.game.config.width / 2.1, this.sys.game.config.height / 2.1, 'Phaser UWP', {
        font: '20px Segoe UI',
        fill: '#00FF00'
      })
      .setScrollFactor(0);

    this.startBtn = this.add
      .text(this.sys.game.config.width / 3, this.sys.game.config.height / 3, 'Play', {
        font: '20px Segoe UI',
        fill: '#00FF00',
      })
      .setInteractive();

    this.startBtn.on('pointerdown', this.startGame, this);
    this.scene.bringToTop();
  }

  startGame() {
    this.scene.stop('GameScene');
    this.scene.start('GameScene');
  }

}

export default BootScene;
