const calculator = Calculator();

const Calculator = () => {
  let result = 0;
  
  const getResult = () => {        
    return result;
  };

  const reset = () => {
    result = 0;
    return result;
  };
    
  const add = (value) => {        
    result += value;
    return add;
  };

  const subtract = (value) => {        
    result -= value;
    return subtract;
  };

  const divide = (value) => {        
    result /= value;
    return divide;
  };

  const multiply = (value) => {        
    result *= value;
    return multiply;
  };
  
  return { add, getResult, reset };
 }

module.exports = calculator;