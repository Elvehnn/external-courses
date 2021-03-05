module.exports = function getTypeOfArg(s) {
  if ((typeof s === "number" || typeof s === "string") && !isNaN(s)) {
    return typeof s;
  };
  return undefined;
};