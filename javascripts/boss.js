const Robot = require('./robot');

const makeGoogle = () => {
  const Assistant = Object.create(Robot);
  Assistant.type = 'Assistant';
  Assistant.model = 'Google';
  Assistant.hpModifier = 20;
  Assistant.attackModifier = 15;
  Assistant.setHP(175, 250);
  Assistant.setDmg(50, 75);
  return Assistant;
};
const makeAmazon = () => {
  const Amazon = Object.create(Robot);
  Amazon.type = 'Alexa';
  Amazon.model = 'Amazon';
  Amazon.hpModifier = 15;
  Amazon.attackModifier = 25;
  Amazon.setHP(150, 200);
  Amazon.setDmg(60, 90);
  return Amazon;
};
const makeApple = () => {
  const Apple = Object.create(Robot);
  Apple.type = 'Siri';
  Apple.model = 'Apple';
  Apple.hpModifier = 30;
  Apple.attackModifier = 10;
  Apple.setHP(200, 300);
  Apple.setDmg(45, 60);
  return Apple;
};

const bossBuilderArray = [makeGoogle, makeAmazon, makeApple,];

module.exports = bossBuilderArray;
