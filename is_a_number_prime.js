function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
let a = isPrime(73);
console.log(a);
