function changeHp(n) {
  this.hp -= n;
  if (this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
}

export default changeHp;
