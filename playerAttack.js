import HIT from "./hit.js";
import getRandom from "./getRandom.js";
function playerAttack() {
  const attack = {};
  const elFormFight = document.querySelector(".control");
  for (let item of elFormFight) {
    //console.dir(item);
    if (item.checked && item.name === "hit") {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    if (item.checked && item.name === "defence") {
      attack.defence = item.value;
    }
    item.checked = false;
  }
  return attack;
}

export default playerAttack;
