import { Game } from "./classGame.js";

const game = new Game();

game.start();

// function init() {
//   scorpion.createPlayer();
//   subzero.createPlayer();
//   generateLogs("start", scorpion, subzero);
// }
// init();
// elFormFight.addEventListener("submit", function (e) {
//   e.preventDefault();
//   //console.dir(elFormFight);
//   const {
//     hit: hitEnemy,
//     defence: defenceEnemy,
//     value: valueEnemy,
//   } = enemyAttack();
//   const { hit, defence, value } = playerAttack();

//   if (hit !== defenceEnemy) {
//     subzero.changeHp(value);
//     subzero.renderHp();
//     generateLogs("hit", scorpion, subzero, value);
//   } else {
//     generateLogs("defence", subzero, scorpion);
//   }
//   if (hitEnemy !== defence) {
//     scorpion.changeHp(valueEnemy);
//     scorpion.renderHp();
//     generateLogs("hit", subzero, scorpion, valueEnemy);
//   } else {
//     generateLogs("defence", scorpion, subzero);
//   }

//   showResult();
//   //console.log("me:", player);
//   //console.log("comp:", enemy);
// });
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
