const expandedForm = (num) => {
  let split = num.toString().split("");

  let arr = "";

  for (let i = 1; i < split.length + 1; i++) {
    if (split[i - 1] > 0) {
      arr += split[i - 1] + "0".repeat(split.length - i) + " + ";
      //arr += "+" + " ";
    }
  }
  // split.map((e, i, arr) => {

  // })

  console.log(arr.substring(0, arr.length - 3));
};

let a = expandedForm(70304);

console.log(a);
