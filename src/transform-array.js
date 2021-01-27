const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr !== "object") throw new Error('Not an Array!');
  let newArr = [];

  arr.map((item, i) => {
    if (item === '--double-next') {
      newArr.push(i + 1);
    } else if (item === '--double-prev') {
      newArr.push(i);
    } else newArr.push(item);
  });

  if (newArr.includes('--discard-next') || newArr.includes('--discard-prev')) {
    newArr = arr.filter((item, i) => {
      if (arr.includes('--discard-next')) {
        return (item !== '--discard-next' && i !== arr.indexOf('--discard-next') + 1);
      } else if (arr.includes('--discard-prev')) {
        return (item !== '--discard-prev' && i !== arr.indexOf('--discard-prev') - 1);
      }
    });
  }
  return newArr;
};
