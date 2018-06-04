const data = require('./data');
const dom = require('./dom');
const Player = require('./player');
const Game = require('./Game');
const weapons = require('./weapons');
const boss = require('./boss');

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
      const game = new Game(player, data.createMobs(), boss.randomBoss());
      game.player.opponent = game.mobs[Math.floor(Math.random() * game.mobs.length)];
      $('#choose-player').hide();
      data.setGame(game);
      dom.drawScreen(game);
      addAttackEvent();
    }).catch(err => {
      console.error('Error loading weapons', err);
    });
  }
};
const addAttackEvent = () => {
  $(document).on('click', '#attack', e => {
    const game = data.getGame();
    const playerDmg = game.player.attack();
    game.player.opponent.hp -= playerDmg;
    dom.updateHP(game);
    $('#ticker').append(`<p>${game.player.name} attacks ${game.player.opponent.model} ${game.player.opponent.type} with ${game.player.weapon.name} for ${playerDmg} damage.</p>`);
    $('#ticker :first-child').hide('slowest', function () { this.remove(); });
    setTimeout(() => {
      if (game.player.opponent.hp <= 0) {
        game.player.hp = game.player.maxHP;
        data.onMobDeath(game);
        dom.drawScreen(game);
        return;
      }
      else if (game.player.hp <= 0) {
        $('#ticker').html('you lose');
        return;
      }
      game.player.hp -= game.player.opponent.attack();
      dom.updateHP(game);
    }, 500);
  });
};
module.exports = {
  addStartEvent,
};
