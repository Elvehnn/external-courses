
function deepClone(obj) {
    var clone = {};
  
  for (let i in obj) {
    if (obj[i] instanceof Object) {
      if (Array.isArray(obj[i])){
        clone[i] = [...obj[i]];
        return clone;
      }; 
      clone[i] = deepClone(obj[i]);
      
    } else {
      clone[i] = obj[i];
    }
  };
  return clone;
  };

module.exports = deepClone;