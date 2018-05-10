const Robot = require('./robot');

const Powertool = Object.create(Robot);
Powertool.type = 'powertool';
Powertool.hpModifier = 5;
Powertool.attackModifier = 10;

const drill = Object.create(Powertool);
drill.model = 'drill';
drill.dmgType = 'drilling';
drill.setHP(40, 50);
drill.setDmg(50, 60);

const jigsaw = Object.create(Powertool);
jigsaw.model = 'jigsaw';
jigsaw.dmgType = 'laceration';
jigsaw.setHP(30, 50);
jigsaw.setDmg(60, 70);

module.exports = {
  drill,
  jigsaw,
};
