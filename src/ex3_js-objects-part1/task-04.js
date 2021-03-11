function addObjectProperty(key, obj) {
    let newObj = obj;
    if (!(key in newObj)) {
        newObj[key] = 'new';
    };
    return obj;
}
    
module.exports = addObjectProperty;