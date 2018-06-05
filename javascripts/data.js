const Appliances = require('./appliances');
const Computers = require('./computers');
const Powertools = require('./powertools');
const weapons = require('./weapons');
const dom = require('./dom');

let game = {};

const setGame = (newGame) => {
  game = newGame;
};
const getGame = () => {
  return game;
};
const onMobDeath = (game) => {
  game.mobs = game.mobs.filter(mob => mob.hp > 0);
  if (randomNum(10) >= 4) {
    weaponDrop(game);
  } else {
    newOpponent(game);
  }
};
const gameOver = (game) => {
  $('#killscreen').modal('show');
  $('#killscreen').find('.modal-body').html(`<p>${game.player.opponent.model + ' ' + game.player.opponent.type} defeated ${game.player.name} by ${game.player.opponent.dmgType}!</p>`);
};
const newOpponent = (game) => {
  const newOpponent = game.mobs[randomNum(game.mobs.length - 1)];
  game.player.opponent = newOpponent;
  setGame(game);
};
const weaponDrop = (game) => {
  const mobDrops = game.player.opponent.drops;
  const droppedWeapon = mobDrops[randomNum(mobDrops.length - 1)];
  weapons().then(weps => {
    const weaponDropped = weps.find(w => w.id === droppedWeapon);
    dom.drawWeaponDrop(game, weaponDropped);
    $('#attack').prop('disabled','disabled');
    $('.yes').click(e => {
      $('#attack').prop('disabled', false);
      game.player.weapon = weaponDropped;
      newOpponent(game);
      dom.drawScreen(game);
    });
    $('.no').click(e => {
      $('#attack').prop('disabled', false);
      newOpponent(game);
      dom.drawScreen(game);
    });
  }).catch();

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
const randomNum = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};
module.exports = {
  createMobs,
  setGame,
  getGame,
  gameOver,
  onMobDeath,
  randomNum,
};
