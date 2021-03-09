function isPrime(num) {
        
    if (num > 1000 || num <= 1) {
        return "Данные неверны";
    };

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return `Число ${num} - составное число`;
        }
    };
    
    return `Число ${num} - простое число`;
      
};

module.exports = isPrime;