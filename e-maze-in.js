"use strict";
const main = () => {
  let input = "LLRDDR";
  let x = 0;
  let y = 0;
  input = input.split("");
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "L":
        x--;
        break;
      case "R":
        x++;
        break;
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
    }
  }

  return `${x} ${y}`;
};

console.log(main());
