//* Recursive Function
function recursive(num) {
  let sum = 0;
  while (num > 0) {
    sum = num + recursive(num - 1);
    return sum;
  }
  return 0;
}
console.log(recursive(5) + " <--Recursive result");
// ###########################################################

//* Fibonacci Sequence
function fibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i < num.length; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib
}
console.log(fibonacci([0, 1, 2, 3, 4, 5, 6]) + " <--Fibonacci result");
// ###########################################################

// ###########################################################
//* Repeated integer finder
function repeated(num) {
  let observed = [];
  for (let i = 0; i < num.length; i++) {
    if (observed[num[i]]) {
      return num[i];
    } else {
      observed[num[i]] = num[i];
    }
  }
}
console.log(repeated([0, 1, 4, 2, 5, 5, 6]) + " <--Repeated result");
// ###########################################################

// ###########################################################
//* Missing/next number finder
function findMissing(num) {
  let sorted = num.sort(function (a, b) { return a - b });
  //let i = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < 0) { sorted[i] = 0 };
    if (sorted[i + 1] !== sorted[i] + 1) {
      return sorted[i] + 1;
    }
  }
}
const givenArray = [-100000, 2, 4, 3, 1, 5, 6]; // 1,2,4,5,6 = 3
console.log(findMissing(givenArray) + " <--Missing Num result");




/* ###########################################################
//* Recursive Function
console.log(recursive(10) + " <--Recursive result");

//* Fibonacci Sequence
console.log(fibonacci([0, 1, 2, 3, 4, 5, 6]) + " <--Fibonacci result");

//* Repeated integer finder
console.log(repeated([0, 1, 2, 2, 4, 5, 6]) + " <--Repeated result");

//* Find missing number in a consecutive numbers array
const givenArray = [1, 4, 2, 6, 5]; // 1,2,4,5,6 = 3
console.log(findMissing(givenArray) + " <--Missing Num result");
########################################################### */
