//TODO: Compare two array elements and find non-matching numbers
//* Comparison using sort & indexOf method
function compareArrays(arr1, arr2) {
  let nonMatching = [];
  //let matching = [];
  arr1.sort(function (a, b) { return a - b });
  arr2.sort(function (a, b) { return a - b });
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
let givenArr1 = [1, 3, 4, 7, 8, 6, 9, 5];
let givenArr2 = [2, 3, 10, 7, 11, 9, 6];

console.log(compareArrays(givenArr1, givenArr2) + " <--Final result sort&indexOf");
console.log("--------------------------------------------")

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Compare two arrays and return non-matching elements
function findValues(arr1, arr2) {
  let result = [];
  for (let i of arr2) {
    if (arr1.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}
let given1 = ["a", "b", "c", "d", 2, 4, 3];
let given2 = [6, 2, 3, 4, "e", "d"];
console.log(findValues(given1, given2) + " <--Result");
console.log(findValues(given2, given1) + " <--Result");

console.log("-------------------------------------------");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//* Compare two arrays and return non-matching elements
function findValues(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] && arr2[i] !== arr1[i]){
      console.log(arr1[i], arr2[i])
      result.push(arr1[i], arr2[i]);
    }
  }
  return result;
}
let given3 = [1,2,3,4,6,8,20];
let given4 = [1,2,3,4,5,7,11];
console.log(findValues(given3, given4) + " <--Result");
console.log(findValues(given4, given3) + " <--Result");

console.log("-------------------------------------------");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//* Using filter method
const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];
function diffArrayInt(array1, array2) {
  let newArr = [...array1, ...array2];
    let result = newArr.filter((item) => !array1.includes(item) || !array2.includes(item));
    return result;
}
console.log(diffArrayInt(arrayOne, arrayTwo));


