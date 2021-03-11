function addObjectProperty(key, obj) {
    // let newObj = {};
    // if (!(key in obj)) {
    //     newObj[key] = 'new';
    // };
    // newObject = Object.assign(obj, newObj)
    // return newObject;

    let newObj = obj;
    if (!(key in newObj)) {
        newObj[key] = 'new';
    };
    return obj;

    // var newObj = Object.assign({}, obj);
    // if (!(key in newObj)) {
    //       newObj[key] = 'new';
    // };
    // console.log(newObj);
    // return newObj;
}
module.exports = addObjectProperty;