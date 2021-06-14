import getRandom from "./getRandom.js";
import ATTACK from "./attack.js";
import HIT from "./hit.js";

const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};

export default enemyAttack;
// function enemyAttack() {
//   const hit = ATTACK[getRandom(3) - 1];
//   //console.log("HIT:", hit);
//   const defence = ATTACK[getRandom(3) - 1];
//   //console.log("DEFENCE:", defence);

//   return {
//     value: getRandom(HIT[hit]),
//     hit,
//     defence,
//   };
// }
