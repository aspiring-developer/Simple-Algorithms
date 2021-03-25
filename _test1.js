



//const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
//const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

//function diffArrayInt(array1, array2) {
//  // 1. Return a new array that will follow this rules
//  return (
//    // 2. Combine two arrays
//    [...array1, ...array2]
//    // 3. Check each element if it's unique return in a new array
//    .filter((item) => !array1.includes(item) || !array2.includes(item))
//  );
//}

//console.log(diffArrayInt(arrayOne, arrayTwo));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Non matching numbers in two arrays
//const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
//const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];
//function diffArrayInt(array1, array2) {
//  let newArr = [...array1, ...array2];
//    let result = newArr.filter((item) => !array1.includes(item) || !array2.includes(item));
//    return result;
//}
//console.log(diffArrayInt(arrayOne, arrayTwo));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find missing number in a consecutive numbers array
function findMissing(num) {
  let sortedNum = num.sort(function (a, b) { return a - b });
  console.log(sortedNum + " <--SortedNum")
  let missingNum = '';
  for (let i = 0; i < sortedNum.length - 1; i++) {
    //if (sortedNum[i] + 1 !== sortedNum[i + 1]) {
    if (sortedNum[i + 1] !== sortedNum[i] + 1) {
      console.log(sortedNum[i] + " <--sortedNum[i]");
      console.log(sortedNum[i] + 1 + " <--sortedNum[i] + 1");
      console.log(sortedNum[i + 1] + " <--sortedNum[i + 1]");
      missingNum = sortedNum[i] + 1;
    }
  }
  return missingNum;
}
const givenArray = [1, 4, 2, 6, 3]; // 1,2,4,5,6 = 3
console.log(findMissing(givenArray));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log("..........................................");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find repeating number in an array
function findRepeating(num) {
  let sorted = num.sort(function (a, b) { return a - b });
  console.log(sorted + " <--sorted")
  let repeatingNum = '';
  for (let i = 0; i < sorted.length - 1; i++) {
    //if (sorted[i] + 1 !== sorted[i + 1]) {
    if (sorted[i + 1] !== sorted[i] + 1) {
      console.log(sorted[i] + " <--sorted[i]");
      console.log(sorted[i] + 1 + " <--sorted[i] + 1");
      console.log(sorted[i + 1] + " <--sorted[i + 1]");
      repeatingNum = sorted[i] + 1;
    }
  }
  return repeatingNum;
}
const theNumber = [1, 4, 2, 6, 3,5,4,6,7,6]; // 1,2,3,4,4,5,6,6,6,7 = 4?
console.log(findRepeating(theNumber));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


