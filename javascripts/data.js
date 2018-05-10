const Appliances = require('./appliances');
const Computers = require('./computers');
const Powertools = require('./powertools');

const allRobotBuilders = [];

let player1 = {};
let player2 = {};

const setPlayers = (playerOne, playerTwo) => {
  player1 = playerOne;
  player2 = playerTwo;
};
const getPlayers = () => {
  return [player1, player2,];
};

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
  setPlayers,
  getPlayers,
};
