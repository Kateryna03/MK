import { createElement } from "./utils.js";
import { elArenas } from "./constants.js";
function createReloadButton() {
  const reloadWrap = createElement("div", "reloadWrap");
  const restartButton = createElement("button", "button");
  restartButton.innerText = "Restart";

  reloadWrap.appendChild(restartButton);
  elArenas.appendChild(reloadWrap);
  console.log(reloadWrap);
  console.log(restartButton);

  restartButton.addEventListener("click", function () {
    //return window.location.reload();
    window.location.pathname = "arenas.html";
  });
}
export default createReloadButton;
