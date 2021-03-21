function firstSymbolToUppercase (str) {
    return str ? `${str[0].toUpperCase()}${str.slice(1)}`: undefined;
}

module.exports = firstSymbolToUppercase;