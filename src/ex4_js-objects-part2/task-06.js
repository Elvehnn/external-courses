function firstLetterToUpperCase(str) {
    let arr = str.split(' ');
    let newArr = arr.map(item => {
      if (item !== '') {
       return `${item[0].toUpperCase()}${item.slice(1)}`;
      }
      return ('');
    })

    return newArr.join(' ');
    
}

module.exports = firstLetterToUpperCase;