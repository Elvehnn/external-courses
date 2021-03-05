function sameValues(arr) {
    let newArr = arr.filter((item) => item === arr[0]);
    return newArr.length === arr.length;
  };
  module.exports = sameValues;