const Appliances = require('./appliances');
const Computers = require('./computers');
const Powertools = require('./powertools');

let game = {};

const setGame = (newGame) => {
  game = newGame;
};
const getGame = () => {
  return game;
};
const onMobDeath = (game) => {
  game.mobs = game.mobs.filter(mob => mob.hp > 0);
  game.player.opponent = game.mobs[Math.floor(Math.random() * game.mobs.length)];
  setGame(game);
};
const allRobotBuilders = [];

const makeBuilderArray = (typeGroup) => {
  for (const robot in typeGroup) {
    const botBuilder = typeGroup[robot];
    allRobotBuilders.push(botBuilder);
  }
};
const createMobs = () => {
  makeBuilderArray(Appliances);
  makeBuilderArray(Computers);
  makeBuilderArray(Powertools);
  return allRobotBuilders.map(robot => {
    return robot();
  });
};

module.exports = {
  createMobs,
  setGame,
  getGame,
  onMobDeath,
};
