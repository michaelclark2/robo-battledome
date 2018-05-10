const data = require('./data');
const dom = require('./dom');

const addStartEvent = () => {
  $('#start').click(chooseFighters);
};
const chooseFighters = (e) => {
  const robot1Name = $('#player1').val();
  const robot1Index = $('#robot1').prop('selectedIndex');

  const robot2Name = $('#player2').val();
  const robot2Index = $('#robot2').prop('selectedIndex');

  if ((robot1Name && robot2Name) && (robot1Index !== 0 && robot2Index !== 0)) {
    const player1 = data.allRobotBuilders[robot1Index - 1]();
    const player2 = data.allRobotBuilders[robot2Index - 1]();

    player1.name = robot1Name;
    player2.name = robot2Name;

    data.setPlayers(player1, player2);

    dom.printPlayers(data.getPlayers());

    $(e.target).hide();
  }
};
module.exports = {
  addStartEvent,
};
