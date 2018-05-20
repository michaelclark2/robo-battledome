const Player = {
  hp: 100,
  critX: 1.25,
  weapon: {},
  attack: function () {
    if (this.weapon.critChance > randomNum(1, 10)) {
      console.log('Critical Hit!');
      return randomNum(this.weapon.att.min, this.weapon.att.max) * this.critX;
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
