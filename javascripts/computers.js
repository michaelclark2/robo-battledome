const Robot = require('./robot');

const Computer = Object.create(Robot);
Computer.type = 'computer';
Computer.hpModifier = 20;
Computer.attackModifier = -6;

const windows = Object.create(Computer);
windows.model = 'Windows';
windows.dmgType = 'computer virus';
windows.setHP(60, 80);
windows.setDmg(30, 40);

const mac = Object.create(Computer);
mac.model = 'Macintosh';
mac.dmgType = 'expired warranty';
mac.setHP(80, 90);
mac.setDmg(20, 35);

module.exports = {
  windows,
  mac,
};
