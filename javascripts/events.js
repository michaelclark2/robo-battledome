const data = require('./data');
const dom = require('./dom');
const Player = require('./player');
const Game = require('./Game');
const weapons = require('./weapons');
const bosses = require('./boss');

// const turn = 0;

const addStartEvent = () => {
  $('#start').click(startGame);
};
const startGame = (e) => {
  const playerName = $('#player-name').val();
  if (playerName) {
    weapons().then(weps => {
      Player.weapon = weps.find(wep => $('#weapon-select').val() === wep.id);
      Player.name = playerName;
      Game.player = Player;
      Game.mobs = data.createMobs();
      Game.boss = bosses[Math.floor(Math.random() * bosses.length)]();
      Player.opponent = Game.mobs[Math.floor(Math.random() * Game.mobs.length)];
      $('#choose-player').hide();
      dom.drawScreen(Player, Player.opponent);
      addAttackEvent();
    }).catch(err => {
      console.error('Error loading weapons', err);
    });
  }
};
const addAttackEvent = () => {
  $('#attack').click(attack);
};
const attack = (e) => {
  Player.opponent.hp -= Player.attack();
  dom.updateHP(Player, Player.opponent);
  setTimeout(() => {
    Player.hp -= Player.opponent.attack();
    dom.updateHP(Player, Player.opponent);
    if (Player.opponent.hp <= 0) {
      $('#ticker').html('you win!');
    }
    else if (Player.hp <= 0) {
      $('#ticker').html('you lose');
    }
  }, 1000);
};

module.exports = {
  addStartEvent,
};
