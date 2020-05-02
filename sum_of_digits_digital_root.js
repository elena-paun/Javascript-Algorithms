function digital_root() {
  let n = 132189;

  let breakLoop = false;
  // console.log(n);
  //  let sum = n;
  //= n.reduce((e, a) => e + a);
  while (!breakLoop) {
    //sum.toString().split("").map(Number);
    //  if (typeof n == "number") {
    n = n.toString().split("").map(Number);

    if (n.length >= 2) {
      n = n.reduce((e, a) => e + a);
    } else {
      breakLoop = true;
    }
  }
  // }

  console.log(Number(n));

  //console.log(maps);
}
let a = digital_root();
console.log(a);
