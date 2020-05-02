const main = () => {
  let input = "zzzzzzoooooooooooo";
  input = input.split("");
  console.log(input);
  let valueO = 0;
  let valueZ = 0;
  let result = input.map(i => {
    i === "o" ? valueO++ : i === "o" ? valueO++ : i === "z" ? valueZ++ : 0;
  });

  console.log(valueZ == valueO % 2 ? "Yes" : "No");
};
main();
// if the number of o's is double to the number of z's return yes
