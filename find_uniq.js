const findUniq = (arr) => {
  let arrMap = arr.map((e, i, arr) => {
    if (arr[i - 1] !== arr[i]) {
      return arr[i];
    }
  });

  return arrMap;
};

let a = findUniq([1, 1, 1, 2, 1, 1]);
console.log(a);
