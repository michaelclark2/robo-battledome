const Robot = require('./robot');

const Computer = Object.create(Robot);
Computer.type = 'computer';
Computer.hpModifier = 20;
Computer.attackModifier = -6;

const makeWindows = () => {
  const windows = Object.create(Computer);
  windows.model = 'Windows';
  windows.dmgType = 'computer virus';
  windows.drops = ['wep2', 'wep4', 'wep1',];
  windows.setHP(160, 80);
  windows.setDmg(30, 18);
  return windows;
};

const makeMac = () => {
  const mac = Object.create(Computer);
  mac.model = 'Macintosh';
  mac.dmgType = 'expired warranty';
  mac.drops = ['wep5', 'wep4', 'wep2',];
  mac.setHP(180, 90);
  mac.setDmg(20, 35);
  return mac;
};

module.exports = {
  makeWindows,
  makeMac,
};
