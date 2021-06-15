import { scorpion, subzero } from "./players.js";
import { elFormFight, elArenas } from "./constants.js";
import createElement from "./createElement.js";
import { playerAttack, enemyAttack } from "./attack.js";
import showResult from "./showResalt.js";
import generateLogs from "./generateLogs.js";

generateLogs("start", scorpion, subzero);

function createPlayer(obj) {
  const elPlayer = createElement("div", "player" + obj.player);
  const elInnerOne = createElement("div", "progressbar");
  const elInnerTwo = createElement("div", "character");
  const divInProgressbar1 = createElement("div", "life");
  const divInProgressbar2 = createElement("div", "name");
  const elImg = createElement("img");

  divInProgressbar1.style.width = `${obj.hp}%`;
  divInProgressbar2.innerText = obj.name;
  elImg.src = obj.img;

  elPlayer.appendChild(elInnerOne);
  elPlayer.appendChild(elInnerTwo);
  elInnerOne.appendChild(divInProgressbar1);
  elInnerOne.appendChild(divInProgressbar2);
  elInnerTwo.appendChild(elImg);

  return elPlayer;
}
elArenas.appendChild(createPlayer(scorpion));
elArenas.appendChild(createPlayer(subzero));

elFormFight.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.dir(elFormFight);
  const enemy = enemyAttack();
  const player = playerAttack();
  console.log(enemy);

  if (player.hit !== enemy.defence) {
    subzero.changeHp(player.value);
    subzero.renderHp();
    generateLogs("hit", scorpion, subzero, player.value);
  } else {
    generateLogs("defence", subzero, scorpion);
  }
  if (enemy.hit !== player.defence) {
    scorpion.changeHp(enemy.value);
    scorpion.renderHp();
    generateLogs("hit", subzero, scorpion, enemy.value);
  } else {
    generateLogs("defence", scorpion, subzero);
  }

  showResult();
  console.log("me:", player);
  console.log("comp:", enemy);
});
//const elButton = document.querySelector(".button");

//"body > div > div.arenas.arena1 > div.player2 > div.progressbar > div.life"

//## Task #1

// function createPlayer(player1, name, hp) {
//   const elPlayer = document.createElement("div");
//   elPlayer.classList.add(player1);

//   const elInnerOne = document.createElement("div");
//   elInnerOne.classList.add("progressbar");

//   const elInnerTwo = document.createElement("div");
//   elInnerTwo.classList.add("character");

//   elPlayer.appendChild(elInnerOne);
//   elPlayer.appendChild(elInnerTwo);

//   const divInProgressbar1 = document.createElement("div");
//   divInProgressbar1.classList.add("life");
//   divInProgressbar1.style.width = `${hp}%`;

//   const divInProgressbar2 = document.createElement("div");
//   divInProgressbar2.classList.add("name");
//   divInProgressbar2.innerText = name;

//   elInnerOne.appendChild(divInProgressbar1);
//   elInnerOne.appendChild(divInProgressbar2);

//   const elImg = document.createElement("img");
//   elImg.src = "http://reactmarathon-api.herokuapp.com/assets/subzero.gif";
//   elInnerTwo.appendChild(elImg);

//   const elArenas = document.querySelector(".arenas");

//   elArenas.appendChild(elPlayer);
// }
// //## Task #2
// // const elArenas = document.querySelector(".arenas");
// // console.log(elArenas);

// createPlayer("player1", "SCORPION", 50);
// createPlayer("player2", "SUB-ZERO", 80);
// ## Task #3 (*)

// Передай в функцию createPlayer всего лишь два аргумента, 1 аргумент это строка 'player1' или 'player2' второй аргумент — это объект твоего игрока из задания Task#0.

// Необходимые поля, такие как name, hp, img вставь в нужные места в коде.

// Функция changeHP должна в аргументах принимать, на какое кол-во надо изменять HP. И решать, нужно ли отнимать или ставить 0. Больше ничего эта функция не должна делать.

// changeHp(10);

// elButton.addEventListener("click", function () {
//   scorpion.changeHp(getRandom(20));
//   subzero.changeHp(getRandom(20));
//   scorpion.renderHp();
//   subzero.renderHp();
//   scorpion.elHp();
//   subzero.elHp();

//   if (scorpion.hp === 0 || subzero.hp === 0) {
//     elButton.disabled = true;
//     createReloadButton();
//   }

//   if (scorpion.hp === 0 && scorpion.hp < subzero.hp) {
//     elArenas.appendChild(playerWin(subzero.name));
//   } else if (subzero.hp === 0 && subzero.hp < scorpion.hp) {
//     elArenas.appendChild(playerWin(scorpion.name));
//   } else if (subzero.hp === 0 && scorpion.hp === 0) {
//     elArenas.appendChild(playerWin());
//   }
// });
