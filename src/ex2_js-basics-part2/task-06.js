function isPrime(num) {
    let flag = true;
    if (num > 1000) {
        return "Данные неверны";
    } else if (num <= 1) {
      return `Вы ввели ${num}!`;
    };
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          flag = false;
          break;
        }
    };
    if (flag) {
      return `Число ${num} - простое число`;
    };
    return `Число ${num} - составное число`;
  
};
module.exports = isPrime;