const Robot = {
  shout: function () {
    console.log(`I am ${this.name}, a fully functioning ${this.type}`);
  },
  attack: function () {
    return Math.floor(Math.random() * (this.dmg.max - this.dmg.min)) + this.dmg.min;
  },
  setHP: function (val1, val2) {
    const max = Math.max(val1, val2);
    const min = Math.min(val1, val2);
    this.hp = Math.floor(Math.random() * (max - min)) + min;
  },
  setDmg: function (val1, val2) {
    const max = Math.max(val1, val2);
    const min = Math.min(val1, val2);
    this.dmg = {max, min,};
  },
};
module.exports = Robot;
