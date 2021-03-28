//* Fibonacci Sequence

//* Repeated integer finder


//* Recursive Function
function recursive(num) {
  let sum = 1;
  while (num > 0) {
    sum = num + recursive(num - 1);
    return sum;
  }
  return 0;
}
console.log(recursive(10));
