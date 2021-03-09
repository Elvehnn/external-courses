module.exports = function getTypeOfArgument(value) {
  return (typeof value === "number" || typeof value === "string") && !isNaN(value) ? typeof value : undefined;
};