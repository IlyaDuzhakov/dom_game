import "./style.css";
import picture from "./images/goblin.png";
import { getRandomIndex } from "./helpers.js";

const blocksContainer = document.querySelector(".container");
const renderBlocks = () => {
  for (let i = 0; i < 16; i += 1) {
    const div = document.createElement("div");
    div.classList.add("block");
    blocksContainer.append(div); // замена appendChild на append более современный метод
  }
};
renderBlocks();

const startGame = () => {
  const blocks = document.querySelectorAll(".block");
  const randomIndex = getRandomIndex();
  // const html = `<img class="picture" src="${picture}">`;
  const html = document.createElement("img");
  html.setAttribute("src", `${picture}`);
  html.setAttribute("class", `picture`);
  html.setAttribute("alt", `picture`);
  for (let i = 0; i < blocks.length; i += 1) {
    blocks[i].innerHTML = "";
  }
  blocks[randomIndex].insertAdjacentElement("afterbegin", html);
};
setInterval(startGame, 1000);
