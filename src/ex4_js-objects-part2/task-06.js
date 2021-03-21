function firstLetterToUpperCase(str) {
    let arr = str.split(' ');
    let newArr = arr.map(item => `${item[0].toUpperCase()}${item.slice(1)}`);
    return newArr.join(' ');
}

module.exports = firstLetterToUpperCase;