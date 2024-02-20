function Factorial(num) {
  if (num <= 1) {
    return num;
  }
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

console.log(Factorial(2));
