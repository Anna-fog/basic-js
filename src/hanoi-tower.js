const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const secondsToOneTurn = 3600 / turnsSpeed;
  const allSeconds = Math.floor(secondsToOneTurn * turns);
  return {'turns': turns, 'seconds': allSeconds};
};
