import "./style.css";
import picture from "./images/goblin.png";
const { getRandomIndex } = require("./helpers.js");

const blocks = document.querySelectorAll(".block");

const startGame = () => {
  const randomIndex = getRandomIndex();
  const html = `<img class="picture" src="${picture}">`;
  for (let i = 0; i < blocks.length; i += 1) {
    blocks[i].innerHTML = "";
  }
  blocks[randomIndex].insertAdjacentHTML("afterbegin", html);
};
setInterval(startGame, 2000);
