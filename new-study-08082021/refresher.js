// Fibonacci
function fibonacciOrder(num) {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib;
}
// These both work
//console.log(fibonacciOrder(10));
//console.log(fibonacciOrder([1, 2, 3, 4, 5,6,7,8]));

//////////////////////////////////////////////////////////

// Next positive Integer
