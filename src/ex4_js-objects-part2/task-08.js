function makeCamelCase(str) {
    let arr = str.split(' ');
    let newArr = arr.map(item => {
      if (item !== '') {
       return `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`;
      }
      return ('');
    })
    newArr[0] = newArr[0].toLowerCase();
    return newArr.join('');
}

module.exports = makeCamelCase;