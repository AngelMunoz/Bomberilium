class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create() {
    // Help text that has a 'fixed' position on the screen
    this.add
      .text(this.sys.game.config.width / 2.1, this.sys.game.config.height / 2.1, 'Phaser UWP', {
        font: '20px Segoe UI',
        fill: '#00FF00',
      })
      .setScrollFactor(0);
    this.startBtn = this.add.sprite(this.sys.game.config.width / 1.2, this.sys.game.config.height / 1.2, 'Play').setInteractive();
    this.startBtn.on('pointerdown', this.startGame, this);
    this.scene.bringToTop();
  }

  startGame() {
    this.scene.stop('GameScene');
    this.scene.start('GameScene');
  }

}

export default BootScene;
