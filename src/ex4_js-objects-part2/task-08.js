function makeCamelCase(str) {
    let arr = str.split(' ');
    arr[0] = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    };
    return arr.join('');
}

module.exports = makeCamelCase;