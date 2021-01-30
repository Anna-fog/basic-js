const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: '',

  getLength() {
    let lengthArr = [];
    this.result.split('').map((item => {
      if (item === '(') lengthArr.push(item);
    }));
    return lengthArr.length;
  },

  addLink(value) {
    if (value === null) this.result += '( null )~~';
    else if (value === 0) this.result +='( 0 )~~';
    else if (value === false) this.result +='( false )~~';
    else if (!value) this.result +='( NaN )~~';
    else if (value) this.result +=`( ${value} )~~`;
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.getLength() || typeof position !== "number" || position % 1 !== 0) throw new Error('Position is not correct!')
    this.result = this.result.split('~~').filter((item, i) => {return i !== position - 1}).join('~~');
    return this;
  },

  reverseChain() {
    if (this.result !== '') {
      this.result = this.result.split("~~").reverse().join("~~").slice(2) + '~~';
    }
    return this;
  },

  finishChain() {
    let copyRes = this.result.split('')[0] === '~' ? this.result.slice(2).slice(0, -2) : this.result.slice(0, -2);
    this.result = '';
    return copyRes;
  }
};



module.exports = chainMaker;
