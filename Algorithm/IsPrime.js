function isPrime(n) {
  if (n <= 1) {
    false;
  }
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
