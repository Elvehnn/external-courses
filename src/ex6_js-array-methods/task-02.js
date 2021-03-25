function someLikeFunction(array, callback){
    let flag = false;
    let item;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item, i, array) === true) {
            flag = true;
            return flag;
        }; 
    } 
    return flag;
}

module.exports = someLikeFunction;