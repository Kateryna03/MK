import { elFormFight } from "./constants.js";
import { getRandom } from "./utils.js";
const ATTACK = ["head", "body", "foot"];
const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

function playerAttack() {
  const attack = {};
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
const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};

// export const randomAttack = async () => {
//   let { hit, defence } = playerAttack();
//   const response = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
//     method: 'POST',
//     body: JSON.stringify({
//       hit,
//       defence,
//     })
//   }).then(response => response.json());
//   console.log(response);
//   return response;

// }

export { playerAttack, enemyAttack };
