const data = require('./data');
const dom = require('./dom');
const Player = require('./player');
const weapons = require('./weapons');

const addStartEvent = () => {
  $('#start').click(chooseFighters);
};
const chooseFighters = (e) => {
  weapons().then(weps => {
    Player.weapon = weps.find(wep => $('#weapon-select').val() === wep.id);
    console.log(Player);
  });
  const robot1Name = $('#player1').val();
  const robot1Index = $('#robot1').prop('selectedIndex');

  const robot2Name = $('#player2').val();
  const robot2Index = $('#robot2').prop('selectedIndex');

  if ((robot1Name && robot2Name) && (robot1Index !== 0 && robot2Index !== 0)) {
    const player1 = data.allRobotBuilders[robot1Index - 1]();
    const player2 = data.allRobotBuilders[robot2Index - 1]();

    player1.name = robot1Name;
    player2.name = robot2Name;
    player1.maxHP = player1.hp;
    player2.maxHP = player2.hp;

    data.setPlayers(player1, player2);

    dom.printPlayers(data.getPlayers());
    addAttackEvent();

    $('#start, #choose-fighters').hide();
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
