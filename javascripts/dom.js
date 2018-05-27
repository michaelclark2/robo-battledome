const weapons = require('./weapons');

const printStartWeapons = () => {
  weapons().then(wep => {
    for (let i = 0; i < 3; i++) {
      $('#weapon-select').append(`<option value="${wep[i].id}">${wep[i].name}</option>`);
    }
  }).catch(err => {
    console.error('Error loading weapons.', err);
  });
};
const printPlayer = (player) => {
  const domString =
  `<div class="col-md-12 player">
  <div class="panel panel-default player">
    <div class="panel-body">
      <h1 class="text-center">${player.name}</h1>
      <div class="progress">
        <div id='playerHP' class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
        </div>
      </div>
      <h4>${player.weapon.name} : ${player.weapon.att.min} - ${player.weapon.att.max}</h4>
      <div id="ticker" class="player">
        <p>Player hits windows computer for 4 damage!</p>
        <p>Kim jong un sends nukes and destroys everything, game over!</p>
      </div>
      <div id="user-btns">
        <button id="attack" class="btn btn-danger">Attack</button>
        <button id="heal" class="btn btn-success">Heal</button>
      </div>
    </div>
  </div>
</div>`;
  $('#player').html(domString);
};
const printOpponent = (opponent) => {
  const domString =
  `<div class="col-md-12 text-center opponent">
  <div class="panel panel-primary opponent">
    <div class="panel-body">
      <h1>${opponent.model} ${opponent.type}</h1>
      <div class="progress">
        <div id='opponentHP' class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
        </div>
      </div>
      <img src="https://robohash.org/${opponent.model}${opponent.type}${opponent.hp}.png?size=450x450">
    </div>
  </div>
</div>`;
  $('#opponent').html(domString);
};

module.exports = {
  printPlayer,
  printOpponent,
  printStartWeapons,
};
