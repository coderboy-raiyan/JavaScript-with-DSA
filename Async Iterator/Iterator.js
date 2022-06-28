/*
  Symbol.Iterator is a object that can make a non-Iterable data to iterable
  And the example is below
*/

const range = {
  start: 0,
  stop: 100,
  step: 5,
};

range[Symbol.iterator] = function () {
  let curr = this.start;
  let step = this.step;
  let stop = this.stop;

  return {
    next() {
      const obj = {
        value: curr,
        done: curr > stop,
      };
      curr += step;

      return obj;
    },
  };
};

for (v of range) {
  console.log(v);
}

// const rangeIterator = range[Symbol.iterator]();
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
