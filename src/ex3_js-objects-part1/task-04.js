function addObjectProperty(key, obj) {
    let newObj = Object.assign(obj);
    if (!(key in newObj)) {
        newObj[key] = 'new';
    };
    return newObj;
    
}
    
module.exports = addObjectProperty;