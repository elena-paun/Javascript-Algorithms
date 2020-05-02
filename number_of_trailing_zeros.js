/* Write a program that will calculate the number of trailing zeros in a factorial of a given number. */

const zeros = (n) => {
  let result = 0;
  if (n == 0) return 0;
  while ((n = Math.floor(n / 5))) result += n;
  return result;
};

console.log(zeros(145467787));
