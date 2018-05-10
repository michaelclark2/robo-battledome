const robotBuilders = require('./data');

const printOptions = () => {
  const robotStrings = robotBuilders.map(robot => {
    return `${robot().model} ${robot().type}`;
  });
  robotStrings.forEach(robot => {
    $('.robot-select').append(`<option>${robot}</option>`);
  });
};
module.exports = {
  printOptions,
};
