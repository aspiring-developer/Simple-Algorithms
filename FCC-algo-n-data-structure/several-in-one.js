// ASSIGNING FUNCTION TO A VARIABLE
//var processed = 0;

//function processArg(num) {
//  return (num + 3) / 5;
//}
//console.log(processed = processArg(7));

//* ############################################ */

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];

// Display code
//console.log("Before: " + JSON.stringify(testArr));
console.log("Before: " + testArr);
console.log(nextInLine(testArr, 6));
//console.log("After: " + JSON.stringify(testArr));
console.log("After: " + testArr);

//* ############################################ */
// BOOLEAN
function welcomeToBooleans() {
  return true;
}
console.log(welcomeToBooleans());

//* ############################################ */

// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7));

//* ############################################ */
//* ############################################ */
