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
  changeHp,
  elHp,
  renderHp,
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
  changeHp,
  elHp,
  renderHp,
};

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};
const ATTACK = ["head", "body", "foot"];
const logs = {
  start:
    "Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.",
  end: [
    "Результат удара [playerWins]: [playerLose] - труп",
    "[playerLose] погиб от удара бойца [playerWins]",
    "Результат боя: [playerLose] - жертва, [playerWins] - убийца",
  ],
  hit: [
    "[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.",
    "[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.",
    "[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.",
    "[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.",
    "[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.",
    "[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.",
    "[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.",
    "[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.",
    "[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.",
    "[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.",
    "[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.",
    "[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.",
    "[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.",
    "[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.",
    "[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.",
    "[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.",
    "[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.",
    "[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.",
  ],
  defence: [
    "[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.",
    "[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.",
    "[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.",
    "[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.",
    "[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
    "[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
  ],
  draw: "Ничья - это тоже победа!",
};

const elFormFight = document.querySelector(".control");
console.log(elFormFight);
const elArenas = document.querySelector(".arenas");
const elChat = document.querySelector(".chat");
generateLogs("start", scorpion, subzero);
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

function createReloadButton() {
  const reloadWrap = createElement("div", "reloadWrap");
  const restartButton = createElement("button", "button");
  restartButton.innerText = "Restart";

  reloadWrap.appendChild(restartButton);
  elArenas.appendChild(reloadWrap);
  console.log(reloadWrap);
  console.log(restartButton);

  restartButton.addEventListener("click", function () {
    return window.location.reload();
  });
}

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  //console.log("HIT:", hit);
  const defence = ATTACK[getRandom(3) - 1];
  //console.log("DEFENCE:", defence);

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

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

function generateLogs(type, player1, player2, playerHp) {
  let text = "";
  const date = new Date();
  const time = date.getHours() + ":" + date.getMinutes();

  switch (type) {
    case "start":
      text = logs[type]
        .replace("[player1]", player1.name)
        .replace("[player2]", player2.name)
        .replace("[time]", time);
      break;
    case "hit":
      text =
        `${time}` +
        "-" +
        logs[type][getRandom(logs[type].length - 1)]
          .replace("[playerKick]", player1.name)
          .replace("[playerDefence]", player2.name) +
        " -" +
        playerHp +
        `[${player2.hp}/100]`; //Random
      break;
    case "defence":
      text =
        `${time}` +
        "-" +
        logs[type][getRandom(logs[type].length - 1)]
          .replace("[playerKick]", player1.name)
          .replace("[playerDefence]", player2.name); //Random
      break;
    case "draw":
      text = logs[type];
      //console.log(text);
      break;
    case "end":
      text = logs[type][getRandom(logs[type].length - 1)]
        .replace("[playerWins]", player1.name)
        .replace("[playerLose]", player2.name);
      break;
  }
  const el = `<p>  ${text} <p>`;
  //const el = `<p> ${time} ${text} <p>`;
  elChat.insertAdjacentHTML("afterbegin", el);
}

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
  }
  if (enemy.hit !== player.defence) {
    scorpion.changeHp(player.value);
    scorpion.renderHp();
    generateLogs("hit", subzero, scorpion, player.value);
  }
  if (enemy.hit === player.defence) {
    generateLogs("defence", scorpion, subzero);
  }
  if (player.hit === enemy.defence) {
    generateLogs("defence", subzero, scorpion);
  }
  showResult();
  console.log("me:", player);
  console.log("comp:", enemy);
});
