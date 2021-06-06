const scorpion = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Longsword	", "Howling Sword", "Needle"],
  attack: function () {
    //console.log(Scorpion.name + "Fight...");
    console.log(this.name + "Fight...");
  },
  player: 1,
};

const subzero = {
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Longsword	", "Howling Sword", "Needle"],
  attack: function () {
    console.log(this.name + "Fight...");
  },
  player: 2,
};
const elArenas = document.querySelector(".arenas");
const elButton = document.querySelector(".button");

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

function createElement(tag, className) {
  const ElTag = document.createElement(tag);

  if (className) {
    ElTag.classList.add(className);
  }
  return ElTag;
}

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

function changeHp(player) {
  const ElPlayerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= Math.ceil(Math.random() * 20);
  ElPlayerLife.style.width = player.hp + "%";
  console.log(player.hp);
  if (player.hp <= 0) {
    ElPlayerLife.style.width = 0;
    elArenas.appendChild(playerLose(player));
    elButton.disabled = true;
  }
}

function playerLose(player) {
  const elLoseTitle = createElement("div", "loseTitle");
  if (scorpion.hp === player.hp && subzero.hp === player.hp) {
    elLoseTitle.innerText = "try again";
  } else if (scorpion.hp === player.hp && subzero.hp !== player.hp) {
    elLoseTitle.innerText = scorpion.name + " win";
  } else if (subzero.hp === player.hp && scorpion.hp !== player.hp) {
    elLoseTitle.innerText = subzero.name + " win";
  }
  return elLoseTitle;
}

elButton.addEventListener("click", function () {
  changeHp(scorpion);
  changeHp(subzero);
});
