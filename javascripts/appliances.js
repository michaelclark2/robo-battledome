const Robot = require('./robot');

const Appliance = Object.create(Robot);
Appliance.type = 'appliance';
Appliance.hpModifier = -10;
Appliance.attackModifier = 8;

const microwave = Object.create(Appliance);
microwave.model = 'microwave';
microwave.dmgType = 'radiation';
microwave.setHP(80, 120);
microwave.setDmg(10, 30);

const blender = Object.create(Appliance);
blender.model = 'blender';
blender.dmgType = 'blending';
blender.setHP(70, 100);
blender.setDmg(40, 25);

module.exports = {
  microwave,
  blender,
};
