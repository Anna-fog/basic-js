const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length === 0 || !Array.isArray(members)) return false;

  let firstLetters = [];

  members.map(item => {
    if (typeof item !== "string") return '';
    firstLetters.push(item.trim().slice(0, 1).toUpperCase());
  });

  return firstLetters.sort().join('');

};
