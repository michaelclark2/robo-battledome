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
      game.player.opponent = game.mobs[data.randomNum(game.mobs.length)];
      $('#choose-player').hide();
      $('#arena').removeClass('hide');
      $('#user-btns').removeClass('hide')
        .children().prop('disabled', false);
      $('#ticker').empty();

      data.setGame(game);
      dom.drawScreen(game);
    }).catch(err => {
      console.error('Error loading weapons', err);
    });
  }
};
const addAttackEvent = () => {
  $(document).on('click', '#user-btns', e => {
    dom.updateTicker();
    $(e.target).prop('disabled', 'disabled');
    const game = data.getGame();
    if (e.target.id === 'attack') {
      const playerDmg = game.player.attack();
      game.player.opponent.hp -= playerDmg;
      dom.updateHP(game);
      dom.updateTicker(`${game.player.name} attacks ${game.player.opponent.model} with ${game.player.weapon.name} for ${playerDmg} damage.`);
    }
    else if (e.target.id === 'heal') {
      game.player.heal();
      dom.updateHP(game);
      dom.updateTicker(`${game.player.name} takes a break and heals!`);
    }
    setTimeout(() => {
      $('#attack').prop('disabled', false);
      const opponentDmg = game.player.opponent.attack();
      game.player.hp -= opponentDmg;
      dom.updateHP(game);
      dom.updateTicker(`${game.player.opponent.model} attacks ${game.player.name} for ${opponentDmg} damage.`);
      if (game.player.opponent.hp <= 0) {
        game.player.hp = game.player.maxHP;
        data.onMobDeath(game);
        dom.drawScreen(game);
      }
      else if (game.player.hp <= 0) {
        data.gameOver(game);
      }
    }, 600);
  });
};
const resetBtn = () => {
  $('#reset').click(e => {
    $('#choose-player').show();
    $('#arena').addClass('hide');
  });
};

const init = () => {
  addStartEvent();
  addAttackEvent();
  resetBtn();
};
module.exports = {
  init,
};
