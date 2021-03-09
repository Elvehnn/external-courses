module.exports = function printArray(arr) {
    arr.forEach((element) => console.log(element));
    console.log("Количество элементов - " + arr.length);
    return;
  };