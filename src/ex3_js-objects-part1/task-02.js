function printObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ': ' + obj[key]);
    }
  };
  return;
};

module.exports = printObject;
