const seats = () => {
  let input = "10\n19\n29\n96\n33\n24\n38\n66\n47\n12\n4".split("\n");
  let textCases = Number(input[0]);

  let inputTests = input.splice(1, input.length);

  let arr = [];
  let message = "";
  let result = [];
  for (let i = 1; i <= 108; i++) {
    arr.push(i);
  }

  let seats = ["WS", "MS", "AS", "AS", "MS", "WS"];

  let pairsOfSix = arr.reduce((acc, curr, index, array) => {
    if (index % 6 === 0) acc.push(array.slice(index, index + 6));
    return acc;
  }, []);

  pairsOfSix.map((i, index, array) => {
    if (index % 2 === 0) {
      array[index + 1].reverse();
    }
  });
  let inputNums = inputTests.map(a => Number(a));
  let inputNumLength = inputNums.length;
  let pairsOfSixLength = pairsOfSix.length;
  console.log(inputNums);
  for (let z = 0; z < inputNums.length; z++) {
    for (let i = 0; i < pairsOfSixLength; i++) {
      pairsOfSix[i].map((a, j) => {
        result.push(pairsOfSix[i][j]);
        result.push(seats[j]);
        if (i % 2 != 0) {
          if (
            inputNums[z] === pairsOfSix[i][j] ||
            inputNums[z] === pairsOfSix[i][j]
          ) {
            message += pairsOfSix[i - 1][j] + " " + seats[j] + "\n";
          }
        } else if (
          inputNums[z] === pairsOfSix[i][j] ||
          inputNums[z] === pairsOfSix[i][j]
        ) {
          message += pairsOfSix[i + 1][j] + " " + seats[j] + "\n";
        }
      });
    }
  }

  pairsOfSix = result.reduce((acc, curr, index, array) => {
    if (index % 12 === 0) acc.push(array.slice(index, index + 12));
    return acc;
  }, []);

  console.log(message);
  return message;
};
seats();
