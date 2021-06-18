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
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
//console.log(spreadOut());

/////////////////////////////////////////////////////
// Check For The Presence of an Element With indexOf()
/* Modify the function using indexOf() so that it returns true if
the passed element exists on the array, and false if it does not. */
function quickCheck(arr, elem) {
  // Only change code below this line
  let checking = arr.indexOf(elem);
  if (checking === -1) {
    return false;
  } else {
    return true;
  }
  // Only change code above this line
}

//console.log(quickCheck(['squash', 'onions', 'shallots'], 'shallots'));

//////////////////////////////////////////////////////
// Iterate Through All an Array's Items Using For Loops
/* Modify the function, using a for loop, to return a filtered version of the passed
array such that any array nested within arr containing elem has been removed. */
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    //if(!arr[i].includes(elem)) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

//console.log(filteredArray([[3, 2, 3], [1, 3, 5], [3, 13, 26], [19, 3, 9]], 3));

////////////////////////////////////////////
////////////////////////////////////////////////////
// Create complex multi-dimensional arrays
// DEEP ARRAY (NESTED)
// EXAMPLE:
let nestedArray;
nestedArray = [['deep'], [['deeper'], ['deeper']],
[[['deepest'], ['deepest']],
[[['deepest-est?']]]]];
//................................
/*  Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest. */

// NESTED VIEW (FOR COMPOSITION, SEE EASY WAY BELOW)
let myNestedArray = [
  //------------------- layer 1
  'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',  // myNestedArray[0] to [5]

  //------------------- layer 2
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], // myNestedArray[6]

  //------------------- layer 3
  [
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'] // myNestedArray[7][0]
  ],

  //------------------- layer 4
  [
    [
      ['concat', false, true, 'spread', 'array', 'deeper'] // myNestedArray[8][0][0]
    ]
  ],

  //------------------- layer 5
  [
    [
      [
        ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest'] // myNestedArray[9][0][0][0]
      ]
    ]
  ]

];
//console.log(myNestedArray[9][0][0][0]); // LAST array
//.........................................

let myNestedArray1 = [
  'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', // 1st layer // Element 0,1,2,3,4,5
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],  // 2nd layer // Element [6]
  [['loop', 'shift', 6, 7, 1000, 'method', 'deep']],  // 3rd layer  // [7][0]
  [[['concat', false, true, 'spread', 'array', 'deeper']]],  // 4th layer [8][0][0]
  [[[['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest']]]]  // 5th layer [9][0][0][0]
];
//console.log(myNestedArray1[7][0][5]); // prints 'method'

////////////////////////////////////////////////////////////
