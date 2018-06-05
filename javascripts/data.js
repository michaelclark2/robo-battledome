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
  $('#heal').prop('disabled', false);
  game.mobs = game.mobs.filter(mob => mob.hp > 0);
  if (game.boss.hp <= 0) {
    gameOver(game);
  }
  else if (randomNum(10) >= 4) {
    weaponDrop(game);
  } else {
    newOpponent(game);
  }
};
const gameOver = (game) => {
  $('#user-btns').children().prop('disabled', 'disabled');
  if (game.boss.hp > 0) {
    $('#killscreen').modal('show');
    $('#killscreen').find('.modal-body').html(`<p>${game.player.opponent.model + ' ' + game.player.opponent.type} defeated ${game.player.name} by ${game.player.opponent.dmgType}!</p>`);
  }
  else if (game.boss.hp <= 0) {
    $('#killscreen').modal('show');
    $('#killscreen').find('.modal-title').text('YOU WIN!');
    $('#killscreen').find('.modal-body').html(`<p>${game.player.opponent.model + ' ' + game.player.opponent.type} has been defeated by ${game.player.name} using a ${game.player.weapon.name}!</p>`);
  }
};
const newOpponent = (game) => {
  const newOpponent = game.mobs[randomNum(game.mobs.length)];
  if (!newOpponent) {
    game.player.opponent = game.boss;
    setGame(game);
    dom.drawScreen(game);
  }
  else {
    game.player.opponent = newOpponent;
    setGame(game);
    dom.drawScreen(game);
  }
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
    });
    $('.no').click(e => {
      $('#attack').prop('disabled', false);
      newOpponent(game);
    });
  }).catch();

};
const makeBuilderArray = (typeGroup) => {

};
const createMobs = () => {
  const allConstructors = [];
  makeBuilderArray(Appliances);
  makeBuilderArray(Computers);
  makeBuilderArray(Powertools);
  [Appliances, Computers, Powertools,].forEach(type => {
    for (const robot in type) {
      allConstructors.push(type[robot]);
    }
  });
  return allConstructors.map(robot => {
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
