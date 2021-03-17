//TODO: Compare two array elements and find non-matching numbers

function compareArrays(arr1, arr2) {
  let nonMatching = [];
  //let matching = [];
  arr1.sort(function (a, b) { a - b });
  arr2.sort(function (a, b) { a - b });
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1 && arr1.indexOf(arr2[i]) === -1) {
      nonMatching.push(arr1[i]);
      nonMatching.push(arr2[i]);
    }
    //else{matching.push(arr1[i])}
    nonMatching.sort(function (a, b) { return a - b });
  }
  //console.table(matching)
  return nonMatching;
}
let givenArr1 = [1, 3, 4, 7, 8, 6, 9, 5, 12, 14];
let givenArr2 = [2, 3, 10, 7, 11, 9, 6, 18, 17, 20];

console.table(compareArrays(givenArr1, givenArr2));