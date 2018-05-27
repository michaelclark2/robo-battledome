const Appliances = require('./appliances');
const Computers = require('./computers');
const Powertools = require('./powertools');

const allRobotBuilders = [];

const makeBuilderArray = (typeGroup) => {
  for (const robot in typeGroup) {
    const botBuilder = typeGroup[robot];
    allRobotBuilders.push(botBuilder);
  }
};
makeBuilderArray(Appliances);
makeBuilderArray(Computers);
makeBuilderArray(Powertools);

module.exports = {
  allRobotBuilders,
};
