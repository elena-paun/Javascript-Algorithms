function permutations(string) {
  let arr = [];
  let a = [];
  if (!string || typeof string !== "string") {
    return;
  } else if (string.length == 1) {
    arr.push(string);
    return arr;
  }
  // Establish a base case -
  // if our input's size is less than a certain constant,
  // solve it without recursion;

  // if the input is bigger than said constant,
  // break it down into smaller pieces;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) != i) continue;

    // combine the results from the pieces,
    // and return the completed solution;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    // call the function recursively on the pieces,
    // until they are small enough to be solved directly;

    for (let permutation of permutations(remainingChars)) {
      arr.push(char + permutation);
    }
  }
  //console.log(arr);
  return arr;
}

let n = permutations("a");

console.log(n);
//console.log(n.sort());
