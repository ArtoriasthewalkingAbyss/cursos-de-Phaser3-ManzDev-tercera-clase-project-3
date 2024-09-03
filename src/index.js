import Phaser from "phaser";
// import { PhaserScene } from "./scenes/PhaserScene.js";
import { KeyboardScene } from "./scenes/KeyboardScene.js";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  backgroundColor: "#efefef",
  scene: KeyboardScene // no consigo que no se active la otra escena
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
