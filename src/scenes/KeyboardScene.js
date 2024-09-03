import Phaser from "phaser";

const KEYS = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "ZERO", "OPEN_BRACKET", "CLOSED_BRACKET"];

class KeyboardScene extends Phaser.Scene {
  constructor() {
    super({ key: "KeyboardScene", active: true });
  }

  preload() {
    this.load.image("keyboard", "assets/sprites/keyboard-opreem.png");
    this.load.image("highlight", "assets/sprites/key1.png");
  }

  create() {
    this.keys = [];
    this.drawKeyboard();
  }

  drawKeyboard() {
    this.add.image(0, 0, "keyboard").setOrigin(0);

    this.highlight1 = this.add.image(108, 112, "highlight").setOrigin(0);

    const y = 89;
    const spacing = 50;
    let x = 100;

    KEYS.forEach(idKey => {
      const imageKey = this.add.image(x, y, "highlight").setVisible(false);
      const key = this.input.keyboard.addKey(idKey);

      this.keys.push({ idKey, imageKey, key });
      x += spacing;

      this.input.keyboard.createCombo([38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13], { resetOnMatch: true });

      this.input.keyboard.on("keycombomatch", function (event) {
        console.log("Konami Code entered!");
      });
    });
  }

  update() {
    this.keys.forEach(({ imageKey, key }) => imageKey.setVisible(key.isDown));
  }
}

export { KeyboardScene };
