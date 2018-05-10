const Robot = require('./robot');

const Appliance = Object.create(Robot);
Appliance.type = 'appliance';
Appliance.hpModifier = -10;
Appliance.attackModifier = 8;

const makeMicrowave = () => {
  const microwave = Object.create(Appliance);
  microwave.model = 'Microwave';
  microwave.dmgType = 'radiation';
  microwave.setHP(80, 120);
  microwave.setDmg(10, 30);
  return microwave;
};

const makeBlender = () => {
  const blender = Object.create(Appliance);
  blender.model = 'Blender';
  blender.dmgType = 'blending';
  blender.setHP(70, 100);
  blender.setDmg(40, 25);
  return blender;
};

module.exports = {
  makeMicrowave,
  makeBlender,
};
