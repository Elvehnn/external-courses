function countOriginSymbols(str) {
    let arrFromString = str.split('');
    let result = {};
    for (let i = 0; i < arrFromString.length; i++) {
        let key = arrFromString[i];
        if (key in result) {
            result[key] += 1;
            continue;
        };
        result[key] = 1;
    };
    Object.entries(result).forEach(item => console.log(item));
    // str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
    return;
  };

  module.exports = countOriginSymbols;