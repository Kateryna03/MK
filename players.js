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

// const { name, hp, img, player } = scorpion;
// console.log(name, hp, img, player);
function elHp() {
  const element = document.querySelector(".player" + this.player + " .life");
  return element;
}
function renderHp() {
  let element = this.elHp();
  return (element.style.width = this.hp + "%");
}
function changeHp(n) {
  this.hp -= n;
  if (this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
}

export { scorpion, subzero };
