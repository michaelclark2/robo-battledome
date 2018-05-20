const data = require('./data');
const weapons = require('./weapons');

const printOptions = () => {
  const robotStrings = data.allRobotBuilders.map(robot => {
    return `${robot().model} ${robot().type}`;
  });
  robotStrings.forEach(robot => {
    $('.robot-select').append(`<option>${robot}</option>`);
  });
};
const printStartWeapons = () => {
  weapons().then(wep => {
    console.log(wep);
    for (let i = 0; i < 3; i++) {
      $('#weapon-select').append(`<option value="${wep[i].id}">${wep[i].name}</option>`);
    }
  });
};
const printPlayers = (playersArray) => {
  const domString = playersArray.map((player, i) => {
    return `<div class="col-md-6 text-center">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Player ${i + 1}</h3>
      </div>
      <div class="panel-body">
        <img src="https://robohash.org/${player.name.replace(' ','-')}.png">
        <h2>${player.name}</h2>
        <h4>${player.model} ${player.type}</h4>
        <div class="progress">
          <div id='hpPlayer${i + 1}' class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
    </div>`;
  }).join('');
  $('#arena').html(domString);
  $('#attack').removeClass('hide');
};
module.exports = {
  printOptions,
  printPlayers,
  printStartWeapons,
};
