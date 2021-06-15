import createReloadButton from "./createReloadButton.js";
import { scorpion, subzero } from "./players.js";
import playerWin from "./playerWin.js";
import generateLogs from "./generateLogs.js";
import { elArenas, elFormFight } from "./constants.js";

function showResult() {
  if (scorpion.hp === 0 || subzero.hp === 0) {
    document.querySelector("button").disabled = true;
    for (let item of elFormFight) {
      item.disabled = true;
    }

    createReloadButton();
  }
  if (scorpion.hp === 0 && scorpion.hp < subzero.hp) {
    elArenas.appendChild(playerWin(subzero.name));
    generateLogs("end", subzero, scorpion);
  } else if (subzero.hp === 0 && subzero.hp < scorpion.hp) {
    elArenas.appendChild(playerWin(scorpion.name));
    generateLogs("end", scorpion, subzero);
  } else if (subzero.hp === 0 && scorpion.hp === 0) {
    elArenas.appendChild(playerWin());
    generateLogs("draw", scorpion, subzero);
  }
}

export default showResult;
