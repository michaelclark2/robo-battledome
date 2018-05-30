const data = require('./data');
const dom = require('./dom');
const Player = require('./player');
const Game = require('./Game');
const weapons = require('./weapons');
const bosses = require('./boss');

const addStartEvent = () => {
  $('#start').click(startGame);
};
const startGame = (e) => {
  const playerName = $('#player-name').val();
  if (playerName) {
    weapons().then(weps => {
      const player = new Player();
      player.name = playerName;
      player.weapon = weps.find(wep => $('#weapon-select').val() === wep.id);
      const game = new Game(player, data.createMobs(), bosses());
      console.log(game);
      game.player.opponent = game.mobs[Math.floor(Math.random() * game.mobs.length)];
      $('#choose-player').hide();
      dom.drawScreen(game.player);
      addAttackEvent(game);
    }).catch(err => {
      console.error('Error loading weapons', err);
    });
  }
};
const addAttackEvent = (game) => {
  $('#attack').click(e => {
    console.log('start of turn', game);
    game.player.opponent.hp -= game.player.attack();
    dom.updateHP(game.player, game.player.opponent);
    setTimeout(() => {
      if (game.player.opponent.hp <= 0) {
        $('#ticker').html('you win!');
        return;
      }
      else if (game.player.hp <= 0) {
        $('#ticker').html('you lose');
      }
      game.player.hp -= game.player.opponent.attack();
      dom.updateHP(game.player, game.player.opponent);
    }, 1000);
    console.log('end of turn', game);
  });
};
module.exports = {
  addStartEvent,
};
