const recursion = (obj) => {
  const result = [];
  const deepth = 0;
  const recFinder = (object, deep) => {
    if (!object.value) {
      return result;
    }
    if (!result[deep]) {
      result[deep] = [];
    }
    result[deep].push(object.value);
    if (!object.left && !object.right) {
      return result;
    }
    if (object.left) {
      recFinder(object.left, deep + 1);
    }
    if (object.right) {
      recFinder(object.right, deep + 1);
    }
    return result;
  };
  return recFinder(obj, deepth);
};
module.exports = recursion;
