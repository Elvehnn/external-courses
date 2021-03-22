function isPropertyInProto (property, object) {
    return Object.keys(object).includes(property) ? undefined : object[property];
}

module.exports = isPropertyInProto;