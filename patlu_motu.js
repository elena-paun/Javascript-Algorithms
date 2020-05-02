function main(input) {
  input = input.split(" ");
  let patlu = [];
  let motu = [];
  let patluSum, motuSum, a;
  let i = 0;
  let j = 1;

  while (i < input[0]) {
    i += 1;
    j = i * 2;
    patlu.push(i);
    patluSum = patlu.reduce((acc, curr) => acc + curr);

    if (motu.length > 0) {
      motuSum = motu.reduce((acc, curr) => acc + curr);
    } else {
      motuSum = 0;
    }

    let sum = patluSum + motuSum;
    if (sum > input[0]) {
      a = sum - i;
      patlu[patlu.length - 1] = input[0] - a;
      break;
    }

    motu.push(j);
    patluSum = patlu.reduce((acc, curr) => acc + curr);

    if (motu.length > 0) {
      motuSum = motu.reduce((acc, curr) => acc + curr);
    } else {
      motuSum = 0;
    }
    sum = patluSum + motuSum;
    if (sum > input[0]) {
      a = sum - j;
      motu[motu.length - 1] = input[0] - a;
      break;
    }
  }

  console.log(patlu.length > motu.length ? "Patlu" : "Motu");
}
