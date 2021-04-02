//* Recursive Function
function recursive(num) {
  let sum = 0;
  while (num > 0) {
    sum = num + recursive(num - 1);
    return sum;
  }
  return 0;
}
console.log(recursive(5))
// ###########################################################

//* Fibonacci Sequence
function fibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i < num.length; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
console.log(fibonacci([0, 1, 2, 3, 4, 5, 6]))
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
console.log(repeated([0, 1, 4, 2, 2, 5, 6]))
// ###########################################################

// ###########################################################
//* Missing number finder
function findMissing(num) {
  let sortedNum = num.sort(function (a, b) { return a - b });
  console.log(sortedNum)
  for (let i = 0; i < sortedNum.length; i++) {
    if (sortedNum[i + 1] != sortedNum[i] + 1) {
      return `${sortedNum[i] + 1} <--Missing Number`;
    }
  }
}
const givenArray = [1, 2, 4, 3,5, 6]; // 1,2,4,5,6 = 3
console.log(findMissing(givenArray));




/* ###########################################################
//* Recursive Function
console.log(recursive(10))

//* Fibonacci Sequence
console.log(fibonacci([0, 1, 2, 3, 4, 5, 6]))

//* Repeated integer finder
console.log(repeated([0, 1, 2, 2, 4, 5, 6]))

//* Find missing number in a consecutive numbers array
const givenArray = [1, 4, 2, 6, 5]; // 1,2,4,5,6 = 3
console.log(findMissing(givenArray));
########################################################### */
