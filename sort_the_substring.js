/* Given a string S, and two numbers N, M - arrange the characters of string in between the indexes N and M (both inclusive) in descending order. (Indexing starts from 0). */

const main = (input) => {
  input = "3\nhlleo 1 3\nooneefspd 0 8\neffort 1 4";

  input = input.split("\n");

  let subarray,
    reversed,
    letters = [],
    nums = "";
  let substr1;
  let substr2;
  let substr0;
  let reversedJoin;
  let mapped = input.map((el, i, arr) => {
    if (arr[i].length > 1) {
      subarray = arr[i].split(" ");
      letters = subarray[0].split("");
      substr0 = subarray[0];
      substr1 = Number(subarray[1]);
      substr2 = Number(subarray[2]);
      reversed = subarray[0].substring(substr1, substr2 + 1);
      reversed = reversed.split("").sort().reverse();
      reversedJoin = reversed.join("");
      if (substr1 == substr2) nums = substr0;
      else
        for (let j = 0; j < substr0.length; j++) {
          if (j < substr1) {
            nums += substr0[j];
          } else if (j > substr2) {
            nums += substr0[j];
          } else if (j == substr1) {
            nums += reversedJoin;
            if (nums.includes(reversedJoin)) continue;
          }
        }
      letters.push(nums);
      nums = "";
      return (letters = letters.pop());
    }
  });
  console.log(mapped.join("\n").trim());
  return mapped.join("\n");
};

console.log(main());
