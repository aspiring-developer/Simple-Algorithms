// Largest array of four

function largestOfFour(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort(function (a, b) { return a - b });
    largest.push(sorted[sorted.length-1]);
  }
  //console.log(largest);
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

///////////////////////////////////////////////
// Largest array of four

function largestOfFour1(arr1) {
  let largest1 = [];
  for (let i = 0; i < arr1.length; i++) {
    let sorted1 = arr1[i].sort(function (a, b) { return b-a });
    largest1.push(sorted1[0]);
  }
  console.log(largest1);
  return largest1;
}

largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));