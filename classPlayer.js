import createElement from "./createElement.js";

class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = props.hp;
    this.player = props.player;
    this.img = props.img;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
  }
  elHp = () => {
    return document.querySelector(`.${this.selector} .life`);
  };

  changeHp = (n) => {
    this.hp -= n;
    if (this.hp <= 0) {
      this.hp = 0;
    }
    return this.hp;
  };
  renderHp = () => {
    console.log(this.elHp());
    console.log(this.selector);
    // let element = this.elHp();
    // return (element.style.width = this.hp + "%");
    return (this.elHp().style.width = this.hp + "%");
  };
  createPlayer = () => {
    const elPlayer = createElement("div", this.selector);
    const elInnerOne = createElement("div", "progressbar");
    const elInnerTwo = createElement("div", "character");
    const divInProgressbar1 = createElement("div", "life");
    const divInProgressbar2 = createElement("div", "name");
    const elImg = createElement("img");

    divInProgressbar1.style.width = this.hp + "%";
    divInProgressbar2.innerText = this.name;
    elImg.src = this.img;

    elPlayer.appendChild(elInnerOne);
    elPlayer.appendChild(elInnerTwo);
    elInnerOne.appendChild(divInProgressbar1);
    elInnerOne.appendChild(divInProgressbar2);
    elInnerTwo.appendChild(elImg);

    const rootEl = document.querySelector(`.${this.rootSelector}`);
    rootEl.appendChild(elPlayer);

    return elPlayer;
  };
}

export default Player;
