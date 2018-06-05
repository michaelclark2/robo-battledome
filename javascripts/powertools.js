const Robot = require('./robot');

const Powertool = Object.create(Robot);
Powertool.type = 'powertool';
Powertool.hpModifier = 5;
Powertool.attackModifier = 10;

const makeDrill = () => {
  const drill = Object.create(Powertool);
  drill.model = 'Drill';
  drill.dmgType = 'drilling';
  drill.drops = ['wep3', 'wep6', 'wep1',];
  drill.setHP(90, 50);
  drill.setDmg(50, 60);
  return drill;
};

const makeJigsaw = () => {
  const jigsaw = Object.create(Powertool);
  jigsaw.model = 'Jigsaw';
  jigsaw.dmgType = 'laceration';
  jigsaw.drops = ['wep4', 'wep6', 'wep3',];
  jigsaw.setHP(130, 50);
  jigsaw.setDmg(60, 70);
  return jigsaw;
};

module.exports = {
  makeDrill,
  makeJigsaw,
};
