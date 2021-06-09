function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
//console.log(multiply([1,2,3,4,5,], 5));

//*********************************

function multiply1(arr1, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply1(arr1, n - 1) * arr1[n - 1];
  }
}
//console.log(multiply1([1, 2, 3, 4, 5,], 5));

//*********************************

function multiply2(n) {
  if (n >= 1) {
    return n * multiply2(n - 1);
  } else {
    return 1;
  }
}
//console.log(multiply2(5));
//*********************************

function multiply3(arr3, n) {
  if (n >= 1) {
    console.log(n - 1 + " <--n-1");
    console.log(arr3[n - 1] + " <--arr3[n - 1]");
    return multiply3(arr3, n - 1) * arr3[n - 1];
  } else {
    return 1;
  }
}
//console.log(multiply3([1, 2, 3, 4, 5,], 5));

////////////////////////////////////////////////////////////

function multiply4(n) {
  while (n >= 1) {
    return n * multiply4(n - 1);
  }
  return true;
}

console.log(multiply4(5));

/////////////////////////////////////////////
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 1;
  } else{
    return sum(arr, n - 1) + arr[n-1];

  }
  // Only change code above this line
}
console.log(sum([1, 2, 3, 4, 5], 5));