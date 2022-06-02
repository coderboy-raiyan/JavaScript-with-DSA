// Get the number only from the array imperative way
// This imperative number finding function only work if our array 1st element is number

// Definition of this function

// arr = [1, 3, 4, false, null, undefined, 50, null]
// i = 1

// j = 1
// j = 2
// j = 3
// j = false(3) -> null(4) then j+1 -> 4 -> undefined
// j = 4 -> undefined(4) -> undefined(5) -> then j + 1 -> 5 -> undefined
// j = 5 -> undefined(5) -> 50 (6) -> then j + 1 -> 6 -> undefined

const arr = [1, 2, undefined, 3, 4, null, undefined, "test", false, 80, false];

const takeOnlyNumber = () => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (typeof arr[j] !== "number") {
        arr[j] = arr[j + 1];
        arr[j + 1] = undefined;
      }
    }
    if (typeof arr[i] === "undefined") {
      count++;
    }
  }
  arr.length -= count;
  return arr;
};

console.log(takeOnlyNumber()); // time complexity -> O(n ^ 2) || space complexity -> O(1)

// Now declarative way
const filteredArray = arr.filter((array, index) => typeof array === "number"); //O(n)
console.log(filteredArray);
