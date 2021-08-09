// Fibonacci
function fibonacciOrder(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib;
}
// These both work, but need to modify i
//console.log(fibonacciOrder(10)); // need i <= num
//console.log(fibonacciOrder([1, 2, 3, 4, 5,6,7,8])); // need i < num.length

//////////////////////////////////////////////////////////

// Next positive Integer
function nextPositiveInt(arr) {
  let result = 0;
  let increment = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result === 0) {
      increment++;
    };
    if (arr.indexOf(increment) === -1) {
      result = increment;
    }
  }
  return result;
}
//console.log(nextPositiveInt([1, 2, 3, 5, 6, 4, 8, -3, -5, -4]));

///////////////////////////////////////////////////////
// Next positive Integer
function nextPositiveInt1(arr1) {
  let result1 = 0;
  let increment1 = 0;
  while (result1 === 0) {
    increment1++;

    if (arr1.indexOf(increment1) === -1) {
      result1 = increment1;
    }
  }
  return result1;
}
//console.log(nextPositiveInt1([1, 2, 3, 5, 6, 4, 8, 7]));

///////////////////////////////////////////////////////
// String Reversal
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
console.log(reverseString("Reverse this string"))
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
