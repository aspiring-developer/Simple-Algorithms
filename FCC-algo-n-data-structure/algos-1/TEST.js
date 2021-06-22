// Largest array of four

function largestOfFour(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort(function (a, b) { return a - b });
    //console.log(sorted);
    largest.push(sorted[sorted.length-1]);
  }
  console.log(largest);
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));