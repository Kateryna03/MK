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

    this.player1 = new Player({
      name: "Scorpion",
      hp: 100,
      img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
      player: 1,
      rootSelector: "arenas",
    });

    this.player2 = new Player({
      name: "Subzero",
      hp: 100,
      img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
      player: 2,
      rootSelector: "arenas",
    });

    this.start = () => {
      this.player1.createPlayer();
      this.player2.createPlayer();
      generateLogs("start", this.player1, this.player2);
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
          this.player2.changeHp(value);
          this.player2.renderHp();
          generateLogs("hit", this.player1, this.player2, value);
        } else {
          generateLogs("defence", this.player2, this.player1);
        }
        if (hitEnemy !== defence) {
          this.player1.changeHp(valueEnemy);
          this.player1.renderHp();
          generateLogs("hit", this.player2, this.player1, valueEnemy);
        } else {
          generateLogs("defence", this.player1, this.player2);
        }

        showResult();

        //console.log("me:", player);
        //console.log("comp:", enemy);
      };

      const showResult = () => {
        if (this.player1.hp === 0 || this.player2.hp === 0) {
          document.querySelector("button").disabled = true;
          for (let item of this.form) {
            item.disabled = true;
          }

          createReloadButton();
        }
        if (this.player1.hp === 0 && this.player1.hp < this.player2.hp) {
          this.arena.appendChild(playerWin(this.player2.name));
          generateLogs("end", this.player2, this.player1);
        } else if (this.player2.hp === 0 && this.player2.hp < this.player1.hp) {
          this.arena.appendChild(playerWin(this.player1.name));
          generateLogs("end", this.player1, this.player2);
        } else if (this.player2.hp === 0 && this.player1.hp === 0) {
          this.arena.appendChild(playerWin());
          generateLogs("draw", this.player1, this.player2);
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
