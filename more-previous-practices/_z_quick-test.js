console.log('///////////////////////////////////////');

//* Recursive Function
function recursion(num) {
  let sum;
  while (num >= 0) {
    sum = num + recursion(num - 1);
    return sum;
  }
  return 0;
}
console.log(recursion(10) + " <--Recursive result"); // Expected 55
console.log('///////////////////////////////////////');

// ###########################################################

//* Fibonacci Sequence
function fibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i < num.length; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
console.log(fibonacci([0, 1, 2, 3, 4, 5, 6]) + " <--Fibonacci result");
console.log('///////////////////////////////////////');

// ###########################################################

// ###########################################################
//* Repeated integer finder
function repeated(num) {
  let observed = [];
  for (let i = 0; i < num.length; i++) {
    if (observed[num[i]]) {
      return num[i]
    } else {
      observed[num[i]] = num[i]
    }
  }
  return false;
}
console.log(repeated([0, 1, 2, 3, 4, 5, 6]) + " <--Repeated result");
console.log('///////////////////////////////////////');

// ###########################################################

// ###########################################################
//* Find missing number in a consecutive numbers array
function findMissing(num) {
  let target = 0;
  let sorted = num.sort(function (a, b) { return a - b });
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] + 1 !== sorted[i + 1]) {
      target = sorted[i] + 1;
    }
  }
  return target;
}

const givenArray = [1, 2, 3, 5]; // 1,2,4,5,6 = 3
console.log(findMissing(givenArray) + " <--Missing Num result");
console.log('///////////////////////////////////////');






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
