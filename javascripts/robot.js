const Robot = {
  attackModifier: 0,
  hpModifier: 0,
  shout: function () {
    console.log(`I am ${this.name}, a fully functioning ${this.model} ${this.type}`);
  },
  attack: function () {
    const baseAttack =  Math.floor(Math.random() * (this.dmg.max - this.dmg.min)) + this.dmg.min;
    return baseAttack + this.attackModifier;
  },
  setHP: function (val1, val2) {
    const max = Math.max(val1, val2);
    const min = Math.min(val1, val2);
    this.hp = Math.floor(Math.random() * (max - min)) + min;
    this.hp += this.hpModifier;
    this.maxHP = this.hp;
  },
  setDmg: function (val1, val2) {
    const max = Math.max(val1, val2);
    const min = Math.min(val1, val2);
    this.dmg = {max, min,};
  },
};
module.exports = Robot;
