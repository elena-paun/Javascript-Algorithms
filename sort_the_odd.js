"use strict";
function sortArray(array) {
  if (array == []) {
    return;
  }

  let mapped = array.filter((e, i, arr) => {
    return e % 2 !== 0;
  });
  mapped.sort((a, b) => a - b);
  array.map((number, i) => (number % 2 == 0 ? mapped.splice(i, 0, number) : 0));

  return mapped;
}

let a = sortArray([5, 3, 1, 8, 0]);
// 1 2 3 8 5 4 7
console.log(a);
