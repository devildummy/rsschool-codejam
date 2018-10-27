const make = (...args) => {
  const store = [];
  const reducer = (...arg) => {
    if (arg[0] instanceof Function) {
      return store.reduce(arg[0]);
    }
    if (arg[0] === undefined) {
      return 0;
    }
    arg.forEach((item) => {
      store.push(item);
    });
    return reducer;
  };
  return reducer(...args);
};
module.exports = make;
