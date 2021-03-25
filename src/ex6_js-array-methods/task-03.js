function everyLikeFunction(array, callback){
    let flag = true;
    let item;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item, i, array) === false) {
            flag = false;
            return flag;
        }; 
    } 
    return flag;
}

module.exports = everyLikeFunction;