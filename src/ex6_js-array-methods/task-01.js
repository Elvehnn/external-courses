function sliceLikeFunction(array, begin, end) {
    let newArr = [];
    let finishValue, startValue;
    switch (true) {
        case (begin === undefined): {
            startValue = 0;
            break;
        }
        case (begin < 0): {
            startValue = array.length - begin * (-1);
            break;
        }
        default: {
            startValue = begin;
        }
    }
    switch (true) {
        case (end === undefined): {
            finishValue = array.length;
            break;
        }
        case (begin < 0): {
            finishValue = array.length - end * (-1);
            break;
        }
        default: {
            finishValue = end;
        }
    }
    for (let i = startValue; i < finishValue; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}
module.exports = sliceLikeFunction;