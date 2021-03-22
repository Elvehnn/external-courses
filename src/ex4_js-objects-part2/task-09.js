function pasteSubstring(str, substr, position) {
    let arr = str.split(' ');
    arr.splice(position + 1, 0, substr);
    return arr.join(' ');
  };

  module.exports = pasteSubstring;