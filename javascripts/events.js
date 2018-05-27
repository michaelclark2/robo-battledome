const data = require('./data');
const dom = require('./dom');
const Player = require('./player');
const Game = require('./Game');
const weapons = require('./weapons');

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
      Player.opponent = data.allRobotBuilders[Math.floor(Math.random() * data.allRobotBuilders.length)]();
      dom.printPlayer(Player);
      dom.printOpponent(Player.opponent);
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
  const players = data.getPlayers();
  players[1].hp -= players[0].attack();
  players[0].hp -= players[1].attack();
  $('#hpPlayer1').width(`${Math.ceil((players[0].hp / players[0].maxHP) * 100)}%`);
  $('#hpPlayer2').width(`${Math.ceil((players[1].hp / players[1].maxHP) * 100)}%`);
  if (players[0].hp <= 0 && players[1].hp <= 0) {
    $('#killscreen').modal('show');
    $('#killscreen .modal-title').text('Draw');
    $('#killscreen .modal-body').html('<p>There were no survivors...</p>');
    resetBtn();
  }
  else if (players[0].hp <= 0) {
    $('#killscreen').modal('show');
    $('#killscreen .modal-title').text(`${players[1].name} is the victor!`);
    $('#killscreen .modal-body').html(`<p>${players[1].model} ${players[1].type} ${players[1].name} has defeated ${players[0].model} ${players[0].type} ${players[0].name} by ${players[1].dmgType}.</p>`);
    resetBtn();
  }
  else if (players[1].hp <= 0) {
    $('#killscreen').modal('show');
    $('#killscreen .modal-title').text(`${players[0].name} is the victor!`);
    $('#killscreen .modal-body').html(`<p>${players[0].model} ${players[0].type} ${players[0].name} has defeated ${players[1].model} ${players[1].type} ${players[1].name} by ${players[0].dmgType}.</p>`);
    resetBtn();
  }

};
const resetBtn = () => {
  $('#reset').click(e => {
    location.reload();
  });
};

module.exports = {
  addStartEvent,
};
