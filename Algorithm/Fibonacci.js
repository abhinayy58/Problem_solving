function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  let fib = [0, 1];

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7));
