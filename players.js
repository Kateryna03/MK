import Player from "./classPlayer.js";

const scorpion = new Player({
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  // weapon: ["Longsword	", "Howling Sword", "Needle"],
  // attack: function () {
  //   //console.log(scorpion.name + "Fight...");
  //   console.log(this.name + "Fight...");
  //},
  player: 1,
  rootSelector: "arenas",
});

const subzero = new Player({
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  // weapon: ["Longsword	", "Howling Sword", "Needle"],
  // attack: function () {
  //   console.log(this.name + "Fight...");
  // },
  player: 2,
  rootSelector: "arenas",
});

// const { name, hp, img, player } = scorpion;
// console.log(name, hp, img, player);

export { scorpion, subzero };
