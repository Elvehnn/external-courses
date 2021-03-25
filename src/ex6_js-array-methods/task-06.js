function reduceLikeFunction(array, callback, initialValue){
    let currentItem, previousValue, i;
    if (initialValue) {
        previousValue = initialValue;
        i = 0;
    } else {
        previousValue = array[0];
        i = 1;
    }
    for (i; i < array.length; i++) {
        currentItem = array[i];
        previousValue = callback(previousValue, currentItem, i, array);
    } 
    return previousValue;
}

module.exports = reduceLikeFunction;