function countElements(arr) {
  let odds = 0; evens = 0; zeroes = 0; notANumber = 0;
     
  arr.forEach((item) => {
    if (isNaN(item) || !(typeof item === "number")) {
      notANumber += 1;
      return;
    };

    if (item === 0) {
      zeroes += 1;
      return;
    };

    if (item % 2 !== 0) {
      odds += 1;
      return;
    };
    
    evens += 1;
  });

  let result = {
    notANumber: notANumber,
    odds: odds,
    evens: evens,
    zeroes: zeroes,
  };
  
  console.log(result);
  return [evens, odds, zeroes];
};


  module.exports = countElements;