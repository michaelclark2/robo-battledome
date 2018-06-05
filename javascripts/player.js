const data = require('./data');

function Player () {
  return {
    maxHP: 500,
    hp: 500,
    attack: function () {
      if (this.weapon.critChance >= data.randomNum(10, 1)) {
        return data.randomNum(this.weapon.att.min, this.weapon.att.max) * 2;
      }
      else {
        return data.randomNum(this.weapon.att.min, this.weapon.att.max);
      }
    },
  };
};

module.exports = Player;
