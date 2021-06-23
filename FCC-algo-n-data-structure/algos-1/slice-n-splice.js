/* Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
  let joinedArr1 = arr1.join(',');
  console.log(joinedArr1 + " <--joinedArr1");
  let result ='';
  console.log(arr1 + " <--arr1"); console.log(arr2 + " <--arr2"); console.log(n + " <--n");
  let slicedArr1 = arr1.slice();
  console.log(slicedArr1 + " <--slicedArr1");

  let sallowArr2 = arr2.slice();
  console.log(sallowArr2);

  sallowArr2.splice(n, 0, ...slicedArr1);
  console.log(sallowArr2 + " <--sallowArr2");
 result=(sallowArr2);

 console.log(result);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [4, 1, 2, 3, 5, 6]
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


//////////////////////////////////////////////
//function frankenSplice(arr1, arr2, n) {
//  let result = [];

//result = arr1.concat(arr2);
//  return result;
//}

//frankenSplice([1, 2, 3], [4, 5, 6], 1);
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
///////////////////////////////////////////////
