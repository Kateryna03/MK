import createElement from "./createElement.js";

function createReloadButton() {
  const reloadWrap = createElement("div", "reloadWrap");
  const restartButton = createElement("button", "button");
  const elArenas = document.querySelector(".arenas");
  restartButton.innerText = "Restart";

  reloadWrap.appendChild(restartButton);
  elArenas.appendChild(reloadWrap);
  console.log(reloadWrap);
  console.log(restartButton);

  restartButton.addEventListener("click", function () {
    return window.location.reload();
  });
}
export default createReloadButton;
