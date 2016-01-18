export class Main extends Phaser.State {
  text: Phaser.Text;

  create() {
    this.text = this.add.text(10, 10, 'Hey World', {font: '65px Arial', fill: '#ff0000'});
  }
}
