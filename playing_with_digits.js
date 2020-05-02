const digPow = (n, p) => {
  let result;

  n <= 0 && p <= 0 ? (result = -1) : (result = 0);

  let numToString = n.toString().split("").map(Number);

  for (let i = 0; i < numToString.length; i++) {
    result += Math.pow(numToString[i], p);
    p++;
  }

  let k = Math.floor(result / n);

  return result !== n * k ? -1 : k;
};
