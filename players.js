import renderHp from "./renderHp.js";
import changeHp from "./changeHp.js";
import elHp from "./elHp.js";

export const scorpion = {
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

export const subzero = {
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
