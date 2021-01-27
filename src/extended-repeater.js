const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  if (str && typeof str !== "string") str.toString();
  if (addition && typeof addition !== "string") addition.toString();

  let resStr = '';

  for (let i = 0; i < repeatTimes; i++) {
    resStr += str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
    if (i !== repeatTimes - 1) {
      resStr += separator;
    }
  }
  return resStr;
};
  