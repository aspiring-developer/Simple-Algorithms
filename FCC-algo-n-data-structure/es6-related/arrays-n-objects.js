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
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

//console.table(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush',
//  'PaleTurquoise', 'FireBrick']));

/////////////////////////////////////////////////
//Copy Array Items Using slice()
/* Modify the function using slice() to extract information from the argument array
and return a new array that contains the string elements warm and sunny.  */

function forecast(arr) {
  let sliced = arr.slice(2, 4);

  return sliced;
}

// Only change code above this line
//console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

////////////////////////////////////////////////////////
// Copy an Array with the Spread Operator
/* Modify the function using spread syntax so that it works correctly
(hint: another method we have already covered might come in handy here!). */
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

//console.log(copyMachine([true, false, "Hello", 3], 2));

///////////////////////////////////////////////////
// Combine Arrays with the Spread Operator
/* Modify the function using the spread operator so that it returns
the array ['learning', 'to', 'code', 'is', 'fun'].  */
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment,'is', 'fun'];
  return sentence;
}
console.log(spreadOut());
