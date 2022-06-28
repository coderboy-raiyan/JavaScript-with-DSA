/*
    Generator is like a shorthand of a iterator
*/

function* myRange(start = 0, stop = 100, step = 5) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}

const rangeIt = myRange();

function* generateId() {
  let unique = 2000;

  while (true) {
    yield (unique += 1);
  }
}

const userId1 = generateId();
console.log(userId1.next());
console.log(userId1.next());
console.log(userId1.next());
console.log(userId1.next());
