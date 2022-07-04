let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secoendsScinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secoendsScinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  drawSnake(gameBoard);
}
