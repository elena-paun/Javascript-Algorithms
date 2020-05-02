const list = (names) => {
  let mapped, pop;
  if (names == undefined) {
    return "1";
  } else {
    mapped = names.map((el) => el.name);
    pop = mapped.pop();
    console.log(mapped.join(", ") + " & " + pop);
  }
};

console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
