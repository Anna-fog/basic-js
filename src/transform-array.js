const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr !== "object") throw new Error('Not an Array!');
  let newArr = [];

  arr.map((item, i) => {
    if (item === '--double-next') {
      i !== arr.length - 1 ? newArr.push(arr[i + 1]) : null;
    } else if (item === '--double-prev') {
      i !== 0 ? newArr.push(arr[i - 1]) : null;
    } else newArr.push(item);
  });

  if (arr.includes('--discard-next') || arr.includes('--discard-prev')) {
    newArr = newArr.filter((item, i) => {
      if (newArr.includes('--discard-next')) {
        return (item !== '--discard-next' && i !== newArr.indexOf('--discard-next') + 1 && item !== '--discard-prev');
      } else if (newArr.includes('--discard-prev')) {
        return (item !== '--discard-prev' && i !== newArr.indexOf('--discard-prev') - 1);
      }
    });
  }

  return newArr;

};
