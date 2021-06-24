// Find next positive integer


///////////////////////////////////////////////
function testing(arr) {

  let result = 0;

  let increment = 0;

  while (result === 0) {
    increment++;
    if (arr.indexOf(increment) === -1) {
      result = increment;
    }
  }
  return result;
}
let givenArray = [1, 3, 6, 4, 1, 2];
//let givenArray = [-1, -3];
console.log(testing(givenArray));  // 5
///////////////////////////////////////////////

// Chunky Monkey
//Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a two-dimensional array.

/////////////////////////////////////////////////

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
    console.log(i + " <--i");
    console.log(i+size + " <--i+size");
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/////////////////////////////////////////////