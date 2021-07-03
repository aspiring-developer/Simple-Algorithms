// Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0;
  arr = arr.sort(function (a, b) { return b - a });
  for (let i = arr[1]; i <= arr[0]; i++) {
    sum += i;
  }
  return sum;
}
//console.log(sumAll([1, 4])); // [1,4] should return 10
//sumAll([1, 4]);
//........................................
function sumAll1(arr1) {
  let sum1 = 0;
  //arr1 = arr1.sort(function (a, b) { return b - a });
  sum1 = ((arr1[0] + arr1[1]) * arr1.length)
  return sum1;
}
//console.log(sumAll1([1, 10])); // [1,4] should return 10
//sumAll1([1, 4]);

////////////////////////////////////////////////////////
// Different in two
function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}
//console.log(diffArray([1, 2, 3, 5, 9, 7], [1, 2, 3, 5, 9, 7]));
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
////////////////////////////////////////////////////////
function diffArray1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].indexOf(arr[i][j]) === -1) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
}
//console.log(diffArray([1, 2, 3, 5, 9, 7, 12], [1, 2, 3, 5, 9, 8, 10, 11]));
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
////////////////////////////////////////////////////////
// Largest and smallest number finder
function largestNumFinder(arr) {
  let largest = 0;
  let smallest = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i]>largest) {
    largest = arr[i];
  }
  if(arr[i]<smallest) {
    smallest = arr[i];
  }
}
  return {largest, smallest};
}
//console.log(largestNumFinder([1, 5, 6, 100, 7, 2021, -2]));
////////////////////////////////////////////////////////
// Missing int finder
function missingNumFinder(arr) {
  let result = 0;
  let increment = 0;
  while(result===0) {
    increment++;
    if(arr.indexOf(increment) === -1) {
      result = increment;
    }
  }
  return {result};
}
console.log(missingNumFinder([1, 5, 6, 3, 2]));
////////////////////////////////////////////////////////
// Fibonacci Sequence
function fibonacciSequence(num) {
  let fib = [0,1];


  return fib;
}
console.log(fibonacciSequence(10));
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////