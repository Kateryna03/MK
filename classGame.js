import Player from "./classPlayer.js";
import { createElement } from "./utils.js";
import { playerAttack, enemyAttack } from "./attack.js";
import generateLogs from "./generateLogs.js";
import createReloadButton from "./createReloadButton.js";
export class Game {
  constructor() {
    this.arena = document.querySelector(".arenas");
    this.chat = document.querySelector(".chat");
    this.submit = document.querySelector(".button");
    console.log(this.submit);
    this.form = document.querySelector(".control");

    this.scorpion = new Player({
      name: "Scorpion",
      hp: 100,
      img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
      player: 1,
      rootSelector: "arenas",
    });

    this.subzero = new Player({
      name: "Subzero",
      hp: 100,
      img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
      player: 2,
      rootSelector: "arenas",
    });

    this.start = () => {
      this.scorpion.createPlayer();
      this.subzero.createPlayer();
      generateLogs("start", this.scorpion, this.subzero);
      //console.log(this.generateLogs());
      this.form.addEventListener("submit", (e) => {
        submitCallback(e);
      });

      const submitCallback = (e) => {
        e.preventDefault();
        //console.dir(elFormFight);
        const {
          hit: hitEnemy,
          defence: defenceEnemy,
          value: valueEnemy,
        } = enemyAttack();
        const { hit, defence, value } = playerAttack();

        if (hit !== defenceEnemy) {
          this.subzero.changeHp(value);
          this.subzero.renderHp();
          generateLogs("hit", this.scorpion, this.subzero, value);
        } else {
          generateLogs("defence", this.subzero, this.scorpion);
        }
        if (hitEnemy !== defence) {
          this.scorpion.changeHp(valueEnemy);
          this.scorpion.renderHp();
          generateLogs("hit", this.subzero, this.scorpion, valueEnemy);
        } else {
          generateLogs("defence", this.scorpion, this.subzero);
        }

        showResult();

        //console.log("me:", player);
        //console.log("comp:", enemy);
      };

      const showResult = () => {
        if (this.scorpion.hp === 0 || this.subzero.hp === 0) {
          document.querySelector("button").disabled = true;
          for (let item of this.form) {
            item.disabled = true;
          }

          createReloadButton();
        }
        if (this.scorpion.hp === 0 && this.scorpion.hp < this.subzero.hp) {
          this.arena.appendChild(playerWin(this.subzero.name));
          generateLogs("end", this.subzero, this.scorpion);
        } else if (
          this.subzero.hp === 0 &&
          this.subzero.hp < this.scorpion.hp
        ) {
          this.arena.appendChild(playerWin(this.scorpion.name));
          generateLogs("end", this.scorpion, this.subzero);
        } else if (this.subzero.hp === 0 && this.scorpion.hp === 0) {
          this.arena.appendChild(playerWin());
          generateLogs("draw", this.scorpion, this.subzero);
        }
      };
    };
    const playerWin = (name) => {
      const elWinTitle = createElement("div", "loseTitle");
      if (name) {
        elWinTitle.innerText = name + " win";
      } else {
        elWinTitle.innerText = "draw";
      }

      return elWinTitle;
    };

    // generateLogs = (type, player1, player2, playerHp) => {
    //   const elChat = document.querySelector(".chat");
    //   let text = "";
    //   const time = setTime();
    //   // const date = new Date();
    //   // const time = date.getHours() + ":" + date.getMinutes();

    //   switch (type) {
    //     case "start":
    //       text = logs[type]
    //         .replace("[player1]", player1.name)
    //         .replace("[player2]", player2.name)
    //         .replace("[time]", time);
    //       break;
    //     case "hit":
    //       text =
    //         `${time}` +
    //         "-" +
    //         logs[type][getRandom(logs[type].length - 1)]
    //           .replace("[playerKick]", player1.name)
    //           .replace("[playerDefence]", player2.name) +
    //         " -" +
    //         playerHp +
    //         `[${player2.hp}/100]`; //Random
    //       break;
    //     case "defence":
    //       text =
    //         `${time}` +
    //         "-" +
    //         logs[type][getRandom(logs[type].length - 1)]
    //           .replace("[playerKick]", player1.name)
    //           .replace("[playerDefence]", player2.name); //Random
    //       break;
    //     case "draw":
    //       text = logs[type];
    //       //console.log(text);
    //       break;
    //     case "end":
    //       text = logs[type][getRandom(logs[type].length - 1)]
    //         .replace("[playerWins]", player1.name)
    //         .replace("[playerLose]", player2.name);
    //       break;
    //     default:
    //       return "Try again";
    //   }
    //   const el = `<p>  ${text} <p>`;
    //   //const el = `<p> ${time} ${text} <p>`;
    //   this.chat.insertAdjacentHTML("afterbegin", el);
    // };
  }
}
