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
    `<div><h1 class="text-center">${player.name}</h1>
    <div class="progress">
      <div id='playerHP' class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
      </div>
    </div>
    <h4>${player.weapon.name} : ${player.weapon.att.min} - ${player.weapon.att.max}</h4></div>`;
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
const drawWeaponDrop = (game, weapon) => {
  const domString =
    `<div class="col-md-12 text-center opponent">
      <div class="panel panel-primary opponent">
        <div class="panel-body">
          <div class="thumbnail">
            <div class="caption">
              <h3>${game.player.opponent.model} dropped a ${weapon.name.toLowerCase()}!</h3>
              <p>Pick it up?</p>
              <p><a class="btn btn-primary yes" role="button">Pick Up ${weapon.name}</a> <a class="btn btn-default no" role="button">No Thanks</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  $('#opponent').html(domString);

};
const drawScreen = (game) => {
  printPlayer(game.player);
  printOpponent(game.player.opponent);
};
const updateHP = (game) => {
  $('#playerHP').width(`${Math.ceil((game.player.hp / game.player.maxHP) * 100)}%`);
  $('#opponentHP').width(`${Math.ceil((game.player.opponent.hp / game.player.opponent.maxHP) * 100)}%`);
};
module.exports = {
  drawScreen,
  drawWeaponDrop,
  updateHP,
  printStartWeapons,
};
