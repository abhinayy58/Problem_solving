// Create a function to find the maximum of two numbers.

function maxOfTwoNumbers1(x, y) {
  return x > y ? x : y;
}

function maxOfTwoNumbers2(x, y) {
  return Math.max(x, y);
}


console.log(maxOfTwoNumbers1(5, 10));
console.log(maxOfTwoNumbers2(5, -10));
console.log(maxOfTwoNumbers1(19, 10));
console.log(maxOfTwoNumbers2(-19, 10));