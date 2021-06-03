const Scorpion = {
  name: "Scorpion",
  hp: 20,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Longsword	", "Howling Sword", "Needle"],
  attack: function () {
    //console.log(Scorpion.name + "Fight...");
    console.log(this.name + "Fight...");
  },
};

const Subzero = {
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Longsword	", "Howling Sword", "Needle"],
  attack: function () {
    console.log(this.name + "Fight...");
  },
};
const elArenas = document.querySelector(".arenas");
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
// // const elArenas = document.querySelectorAll(".arenas");
// // console.log(elArenas);

// createPlayer("player1", "SCORPION", 50);
// createPlayer("player2", "SUB-ZERO", 80);
// ## Task #3 (*)

// Передай в функцию createPlayer всего лишь два аргумента, 1 аргумент это строка 'player1' или 'player2' второй аргумент — это объект твоего игрока из задания Task#0.

// Необходимые поля, такие как name, hp, img вставь в нужные места в коде.
function createPlayer(player, obj) {
  const elPlayer = document.createElement("div");
  elPlayer.classList.add(player);

  const elInnerOne = document.createElement("div");
  elInnerOne.classList.add("progressbar");

  const elInnerTwo = document.createElement("div");
  elInnerTwo.classList.add("character");

  elPlayer.appendChild(elInnerOne);
  elPlayer.appendChild(elInnerTwo);

  const divInProgressbar1 = document.createElement("div");
  divInProgressbar1.classList.add("life");
  divInProgressbar1.style.width = `${obj.hp}%`;

  const divInProgressbar2 = document.createElement("div");
  divInProgressbar2.classList.add("name");
  divInProgressbar2.innerText = obj.name;

  elInnerOne.appendChild(divInProgressbar1);
  elInnerOne.appendChild(divInProgressbar2);

  const elImg = document.createElement("img");
  elImg.src = obj.img;
  elInnerTwo.appendChild(elImg);
  elArenas.appendChild(elPlayer);
}
createPlayer("player1", Scorpion);
createPlayer("player2", Subzero);
