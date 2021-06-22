/* Finders Keepers
Create a function that looks through an array arr and returns the first element in it that
passes a 'truth test'. This means that given an element x, the 'truth test' is passed
if func(x) is true. If no element passes the test, return undefined. */

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      //console.log(arr[i]);
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 5], num => num % 2 === 0);  // 2?
findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }); // 8
findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }); // undefined

/////////////////////////////////////////////////
function findElement1(arr1, func1) {
  let result = '';
  for (let i = 0; i < arr1.length; i++) {
    if (func1(arr1[i]) === true) {
      result = arr1[i];
      console.log(result);
      return result;
    }
  }
  return undefined;
}

findElement1([1, 2, 3, 5], num => num % 2 === 0);  // 2?
findElement1([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }); // 8
findElement1([1, 3, 5, 9], function (num) { return num % 2 === 0; }); // undefined