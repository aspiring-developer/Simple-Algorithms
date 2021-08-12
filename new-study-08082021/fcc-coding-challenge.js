// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  let result = [];
  for (let i = 0; i < arr2.length; i++) {

    if (arr1[i] !== arr2[i]) {
      result.push(arr2[i])
    }

  }
  for (let j = 0; j < arr1.length; j++) {

    if (arr2[j] !== arr1[j]) {
      result.push(arr1[j])
    }

  }
  result = result.sort();
  //console.log(result);
  return result;
}

//sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3, 6], [5, 2, 1, 4]);

///////////////////////////////////////////////////////////////////
// Countdown with recursion
function countdown(num) {
  let result = [];
  if (num < 1) { return [] }
  else {
    result = (countdown(num - 1));
    result.unshift(num);
  }
  return result;
}
//console.log(countdown(5));
///////////////////////////////////////////////////////////////////
// Range of numbers with recursion
/* The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */

function rangeOfNumbers(startNum, endNum) {
  let result = [];
  if (endNum >= startNum) {
    result = rangeOfNumbers(startNum, endNum - 1);
    result.push(endNum);
  }
  return result;
};
console.log(rangeOfNumbers(3, 5));

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

