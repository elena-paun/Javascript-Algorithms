const womensAge = (n) => {
  n = 69;

  let twenty = 20;
  let twentyOne = 21;

  let twentyDiv = n / 20;
  let twentyOneDiv = n / 21;

  if (n > 50 && n % 2 == 0) {
    twentyDiv = twentyDiv + 0.1;
  }
  if (n > 50 && n % 2 !== 0) {
    twentyOneDiv = twentyOneDiv + 0.1;
  }
  let two = twentyDiv.toPrecision(2);
  let twoOne = twentyOneDiv.toPrecision(2);

  let dot = two.split(".").join("");
  let dotTwo = twoOne.split(".").join("");

  if (n % 2 == 0) {
    console.log(`${n}? That's just ${twenty}, in base ${dot}!`);
  } else if (n % 2 !== 0) {
    console.log(`${n}? That's just ${twentyOne}, in base ${dotTwo}!`);
  }
  // if (twentyDiv > 50 && n % 2 == 0) {
  //   console.log(`${n}? That's just ${twenty}, in base ${dot + 1}!`);
  // } else if (twentyOneDiv > 50 && n % 2 !== 0) {
  //   console.log(`${n}? That's just ${twentyOne}, in base ${dotTwo + 1}!`);
  // }
};

console.log(womensAge());
//console.log(`${n}? That\'s just ${twenty}, in base ${dot}!`)
console.log(n + "? That's just " + twenty + ", in base " + dot + "!");
