const Calculator = {
  result: 0,

  getResult() {
    return this.result;
  },

  reset() {
    this.result = 0;
    return this;
  },

  add(value) {        
    this.result += value;
    return this;
  },

  multiply(value) {        
    this.result *= value;
    return this;
  },

  subtract(value) {        
    this.result -= value;
    return this;
  },

  divide(value) {        
    this.result /= value;
    return this;
  },

  setState(value) {
    this.result = value;
    return this;
  },

  fetchData(callback) {
      this.result = callback(500);
      return this;
  },
  
};

const calculator = new Calculator;
module.exports = calculator;
