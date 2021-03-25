function mapLikeFunction(arr, callback){
    let newArr = [];
    let item;
    for (let i = 0; i < arr.length; i++) {
        item = arr[i];
        newArr.push(callback(item, i, arr));
    } 
    return newArr;
}

module.exports = mapLikeFunction;