/*The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

The result should be sorted in ascending order.

The input will consist of unique values. The order of the integers in the input collection should not matter.*/
"use strict";
const twoDifference = (input) => {
  let newArray = [];
  let results = [];
  input = input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] == input[j]) continue;
      if (input[j] - input[i] == 2) {
        newArray.push(input[i], input[j]);
      }
    }
  }
  while (newArray.length) {
    results.push(newArray.splice(0, 2));
  }

  return results;
};
let a = twoDifference([4, 1, 2, 3]);
console.log(a);
