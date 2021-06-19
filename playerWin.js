import { createElement } from "./utils.js";

function playerWin(name) {
  const elWinTitle = createElement("div", "loseTitle");
  if (name) {
    elWinTitle.innerText = name + " win";
  } else {
    elWinTitle.innerText = "draw";
  }

  return elWinTitle;
}
export default playerWin;
