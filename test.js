/* global it, describe */
const assert = require('assert');
const make = require('./make');
const sumOfOther = require('./sumOfOther');
const recursion = require('./recursion');

describe('sumOfOthers', () => {
  it('from task', () => {
    const answer = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(answer, [8, 7, 6, 9]);
  });
  it('Empty', () => {
    const answer = sumOfOther([]);
    assert.deepEqual(answer, []);
  });
  it('One', () => {
    const answer = sumOfOther([1]);
    assert.deepEqual(answer, [0]);
  });
  it('Other', () => {
    const answer = sumOfOther([1, 5, 1, 3, 6, 9]);
    assert.deepEqual(answer, [24, 20, 24, 22, 19, 16]);
  });
});
describe('make', () => {
  it('from task', () => {
    function sum(a, b) {
      return a + b;
    }
    const answer = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(answer, 777);
  });
  it('Empty', () => {
    const answer = make();
    assert.deepEqual(answer, 0);
  });
  it('Max', () => {
    function max(a, b) {
      return Math.max(a, b);
    }
    const answer = make(15)(34, 21)(411)(max);
    assert.deepEqual(answer, 411);
  });
  it('Sum of eval arguments', () => {
    function sumOfEval(a, b) {
      if (a % 2 === 0) {
        return a + b;
      }
      return b;
    }
    const answer = make(41)(12, 34)(sumOfEval);
    assert.deepEqual(answer, 46);
  });
});
describe('recursion', () => {
  it('from task', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    const answer = recursion(tree);
    assert.deepEqual(answer, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('Same values at level', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
      },
      right: {
        value: 2,
      },
    };
    const answer = recursion(tree);
    assert.deepEqual(answer, [[1], [2, 2]]);
  });
  it('Empty object', () => {
    const tree = {};
    const answer = recursion(tree);
    assert.deepEqual(answer, []);
  });
  it('Only left', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
        },
      },
    };
    const answer = recursion(tree);
    assert.deepEqual(answer, [[1], [2], [3]]);
  });
});
