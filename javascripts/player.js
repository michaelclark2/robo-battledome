const Player = {
  maxHP: 500,
  hp: 500,
  weapon: {},
  opponent: {},
  attack: function () {
    if (this.weapon.critChance > randomNum(1, 10)) {
      return randomNum(this.weapon.att.min, this.weapon.att.max) * 2;
    }
    else {
      return randomNum(this.weapon.att.min, this.weapon.att.max);
    }
  },

};
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
module.exports = Player;
