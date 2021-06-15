import { getRandom, setTime } from "./utils.js";
import logs from "./logs.js";

function generateLogs(type, player1, player2, playerHp) {
  const elChat = document.querySelector(".chat");
  let text = "";
  const time = setTime();
  // const date = new Date();
  // const time = date.getHours() + ":" + date.getMinutes();

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
    default:
      return "Try again";
  }
  const el = `<p>  ${text} <p>`;
  //const el = `<p> ${time} ${text} <p>`;
  elChat.insertAdjacentHTML("afterbegin", el);
}

export default generateLogs;
