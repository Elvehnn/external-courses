function maxValue(arr) {
    return arr.sort((a, b) => b - a)[0];
  };
  module.exports = maxValue;