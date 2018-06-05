const Robot = require('./robot');

const makeGoogle = () => {
  const Assistant = Object.create(Robot);
  Assistant.type = 'Assistant';
  Assistant.model = 'Google';
  Assistant.hpModifier = 20;
  Assistant.attackModifier = 15;
  Assistant.dmgType = 'military conquest';
  Assistant.setHP(150, 175);
  Assistant.setDmg(40, 60);
  return Assistant;
};
const makeAmazon = () => {
  const Amazon = Object.create(Robot);
  Amazon.type = 'Alexa';
  Amazon.model = 'Amazon';
  Amazon.hpModifier = 15;
  Amazon.attackModifier = 15;
  Amazon.dmgType = 'persistent listening';
  Amazon.setHP(130, 180);
  Amazon.setDmg(30, 80);
  return Amazon;
};
const makeApple = () => {
  const Apple = Object.create(Robot);
  Apple.type = 'Siri';
  Apple.model = 'Apple';
  Apple.hpModifier = 30;
  Apple.attackModifier = 10;
  Apple.dmgType = 'complete mind control';
  Apple.setHP(180, 200);
  Apple.setDmg(25, 60);
  return Apple;
};

const randomBoss = () => {
  const bossBuilderArray = [makeGoogle, makeAmazon, makeApple,];
  const boss = bossBuilderArray[Math.floor(Math.random() * bossBuilderArray.length)]();
  return boss;
};

module.exports = {
  randomBoss,
};
