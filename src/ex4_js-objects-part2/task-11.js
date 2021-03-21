function countOriginSymbols(str) {
  let result = {};
  str.split('').forEach(function(key){
      result[key] = (result[key] || 0) + 1;
      return result;
  });
  Object.entries(result).forEach(item => console.log(item));
};

  module.exports = countOriginSymbols;