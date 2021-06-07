const scorpion = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Longsword	", "Howling Sword", "Needle"],
  attack: function () {
    //console.log(scorpion.name + "Fight...");
    console.log(this.name + "Fight...");
  },
  player: 1,
  changeHp: changeHp,
  elHp: elHp,
  renderHp: renderHp,
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
  changeHp: changeHp,
  elHp: elHp,
  renderHp: renderHp,
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
  const elTag = document.createElement(tag);

  if (className) {
    elTag.classList.add(className);
  }
  return elTag;
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

function getRandom(n) {
  return Math.ceil(Math.random() * n);
}
// Функция changeHP должна в аргументах принимать, на какое кол-во надо изменять HP. И решать, нужно ли отнимать или ставить 0. Больше ничего эта функция не должна делать.

function changeHp(n) {
  this.hp -= n;
  if (this.hp <= 0) {
    this.hp = 0;
  } else {
    this.hp === this.hp;
  }
  return this.hp;
}
// changeHp(10);

function elHp() {
  return (element = document.querySelector(".player" + this.player + " .life"));
}

function renderHp() {
  let element = this.elHp();
  return (element.style.width = this.hp + "%");
}

function playerWin(name) {
  const elWinTitle = createElement("div", "loseTitle");
  if (name) {
    elWinTitle.innerText = name + " win";
  } else {
    elWinTitle.innerText = "draw";
  }

  return elWinTitle;
}

elButton.addEventListener("click", function () {
  scorpion.changeHp(getRandom(20));
  subzero.changeHp(getRandom(20));
  scorpion.renderHp();
  subzero.renderHp();
  scorpion.elHp();
  subzero.elHp();

  // changeHp(scorpion);
  // changeHp(subzero);

  if (scorpion.hp === 0 || subzero.hp === 0) {
    elButton.disabled = true;
  }

  if (scorpion.hp === 0 && scorpion.hp < subzero.hp) {
    elArenas.appendChild(playerWin(subzero.name));
    console.log(elArenas);
  } else if (subzero.hp === 0 && subzero.hp < scorpion.hp) {
    elArenas.appendChild(playerWin(scorpion.name));
  } else if (subzero.hp === 0 && scorpion.hp === 0) {
    elArenas.appendChild(playerWin());
  }
});

function createReloadButton() {
  const reloadWrap = createElement("div", "reloadWrap");
  const restartButton = createElement("button", "button");

  restartButton.innerText = "Restart";

  reloadWrap.appendChild(restartButton);
  elArenas.appendChild(reloadWrap);
  console.log(reloadWrap);
  console.log(restartButton);
}
createReloadButton();
const elReloadButton = document.querySelector(".reloadWrap .button");
console.log(elReloadButton);
elReloadButton.addEventListener("click", function () {
  return window.location.reload();
});
