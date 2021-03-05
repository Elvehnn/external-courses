function countElem(arr) {
    const odds = arr.filter(
      (item) => typeof item === "number" && item % 2 !== 0 && !isNaN(item)
    );
    const evens = arr.filter(
      (item) => typeof item === "number" && item !== 0 && item % 2 === 0
    );
    const nulls = arr.filter((item) => item === 0);
    return [evens.length, odds.length, nulls.length];
  };

  module.exports = countElem;