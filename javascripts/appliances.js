const Robot = require('./robot');

const Appliance = Object.create(Robot);
Appliance.type = 'appliance';
Appliance.hpModifier = -10;
Appliance.attackModifier = 8;

const makeMicrowave = () => {
  const microwave = Object.create(Appliance);
  microwave.model = 'Microwave';
  microwave.dmgType = 'radiation';
  microwave.setHP(180, 120);
  microwave.setDmg(10, 20);
  return microwave;
};

const makeBlender = () => {
  const blender = Object.create(Appliance);
  blender.model = 'Blender';
  blender.dmgType = 'blending';
  blender.setHP(170, 100);
  blender.setDmg(25, 15);
  return blender;
};

module.exports = {
  makeMicrowave,
  makeBlender,
};
