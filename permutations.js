function permutations(string) {
  let arr = [];
  let a = [];
  if (!string || typeof string !== "string") {
    return;
  } else if (string.length == 1) {
    arr.push(string);
    return arr;
  }
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) != i) continue;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);
    
    for (let permutation of permutations(remainingChars)) {
      arr.push(char + permutation);
    }
  }
  
  return arr;
}

let n = permutations("a");

console.log(n);

