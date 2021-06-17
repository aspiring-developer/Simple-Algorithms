let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Anything I want!";
// Only change code above this line
//console.log(myArray);

///////////////////////////////
function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');

  // Only change code above this line
  return arr;
}

//console.log(mixedNumbers(['IV', 5, 'six']));

// Use splice() to remove elements from arr,
// so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4) // this is the code (It starts from index 1 and includes 4 elements //
// ... that leaves 2, 5, 2, 1 (index 0 and index 5, 6, 7))
//console.log(arr);

////////////////////////////////////////////////////////
// Use splice() to replace elements
/* Modify the function using splice() to remove the first two elements of the array
and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places. */
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.table(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush',
  'PaleTurquoise', 'FireBrick']));