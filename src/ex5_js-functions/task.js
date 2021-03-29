const calculator = Calculator();

const Calculator = {
  result: 0,

  getResult: function() {
    return calculator.result;
  },

  reset: function() {
    calculator.result = 0;
    return calculator.result;
  },
    
  add: function(a) {
    var acc = calculator.result;
    if (a !== undefined) {
      acc += a;
      calculator.result = acc;
    }
    let n = (b) => {
      if (b !== undefined) {
        acc += b;
        calculator.result = acc;
      } 
    return n;
    }
    return n;
  },

  subtract: function(a) {
    var acc;
    if (a === undefined) {
      acc = 0;
    } else {
      acc = calculator.result - a;
      calculator.result = acc;
    }
    let n = (b) => {
      if (b !== undefined) {
        acc -= b;
        calculator.result = acc;
      } else {
        acc = 0;
      }
    return n;
    }
    return n;
  },

  divide: function(a) {
    var acc;
    if (a === undefined) {
      acc = 0;
    } else {
      acc = calculator.result / a;
      calculator.result = acc;
    }
    let n = (b) => {
      if (b !== undefined) {
        acc = acc / b;
        calculator.result = acc;
      } else {
        acc = 0;
      }
    return n;
    }
    return n;
  },

  multiply: function(a) {
    var acc;
    if (a === undefined) {
      acc = 0;
    } else {
      acc = calculator.result * a;
      calculator.result = acc;
    }
    let n = (b) => {
      if (b !== undefined) {
        acc *= b;
        calculator.result = acc;
      } else {
        acc = 0;
      }
    return n;
    }
    return n;
  },
} 
  
  module.exports = calculator;