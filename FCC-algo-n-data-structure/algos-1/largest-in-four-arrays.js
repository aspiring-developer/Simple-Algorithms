// LARGEST NUM FINDER
function largestOfFour(arr) {
  let largest = -1000000;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
  }
  //console.log(largest);
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//////////////////////////////////////////////////
// LARGEST ARRAY FINDER
function largestOfFour1(arr1) {
  let largest1 = [0, 0, 0, 0];
  let result1;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest1) {
      result1 = arr1[i];
    }
  }
  //console.log(result1);
  return result1;
}

largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//////////////////////////////////////////////////
// EACH LARGEST NUMBER IN SUB-ARRAYS FINDER
// Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
let result = [];
for (let i = 0; i < arr.length; i++) {
  let largest = arr[i][0];
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    if(arr[i][j] > largest) {
      largest = arr[i][j]
      result.push(largest)
    }
  }
}
return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
