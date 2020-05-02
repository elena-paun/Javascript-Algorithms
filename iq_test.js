const iqTest = (numbers) => {
  let nums = numbers.split(" ");
  let oddNums = [],
    evenNums = [];
  let mapped = nums.map((el, i) => {
    if (el % 2) {
      evenNums.push(i + 1);
    } else {
      oddNums.push(i + 1);
    }
  });

  if (evenNums.length === 1) {
    return evenNums[0];
  } else {
    return oddNums[0];
  }
};
