function renderHp() {
  let element = this.elHp();
  return (element.style.width = this.hp + "%");
}

export default renderHp;
