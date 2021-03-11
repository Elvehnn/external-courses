function cloneObject(obj) {
    let clone = Object.assign({}, obj);
    return clone;
};
module.exports = cloneObject;