const isValidNumber = function(value) {
  return typeof value === "number";
}

//plus 2 valid numbers
const plus = function (a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) throw new Error('Not valid params');
  return (a + b);
}
module.exports = plus;