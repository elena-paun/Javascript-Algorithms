const findNumber = (array) => {
  let l = array.length;
  let sumtotal;
  let sum = ((l + 1) * (l + 2)) / 2;
  l > 0 ? (sumtotal = array.reduce((acc, curr) => acc + curr)) : 0;
  sumtotal = sum - sumtotal;

  l == 0 ? (sumtotal = 1) : 0;
  sumtotal.length == 0 ? (sumtotal = array[l - 1] + 1) : 0;

  return sumtotal;
};

console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]));
