const Appliances = require('./appliances');
const Computers = require('./computers');
const Powertools = require('./powertools');

const allRobotBuilders = [];

const pushRobots = (typeGroup) => {
  for (const robot in typeGroup) {
    const botBuilder = typeGroup[robot];
    allRobotBuilders.push(botBuilder);
  }
};
pushRobots(Appliances);
pushRobots(Computers);
pushRobots(Powertools);

module.exports = allRobotBuilders;
