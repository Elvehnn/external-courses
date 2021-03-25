function filterLikeFunction(array, callback){
    let newArr = [];
    let item;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item, i, array) === true) {
            newArr.push(item);
        }; 
    } 
    return newArr;
}

module.exports = filterLikeFunction;