const sumOfOther = (array) => {
  const result = array.map((item, i, arr) => arr.reduce((acc, curr) => acc + curr) - item);
  return result;
};
module.exports = sumOfOther;
