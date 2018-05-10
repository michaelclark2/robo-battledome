const Robot = require('./robot');

const Powertool = Object.create(Robot);
Powertool.type = 'powertool';
Powertool.hpModifier = 5;
Powertool.attackModifier = 10;

const makeDrill = () => {
  const drill = Object.create(Powertool);
  drill.model = 'Drill';
  drill.dmgType = 'drilling';
  drill.setHP(40, 50);
  drill.setDmg(50, 60);
  return drill;
};

const makeJigsaw = () => {
  const jigsaw = Object.create(Powertool);
  jigsaw.model = 'Jigsaw';
  jigsaw.dmgType = 'laceration';
  jigsaw.setHP(30, 50);
  jigsaw.setDmg(60, 70);
  return jigsaw;
};

module.exports = {
  makeDrill,
  makeJigsaw,
};
