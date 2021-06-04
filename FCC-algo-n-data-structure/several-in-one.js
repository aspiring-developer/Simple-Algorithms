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
var testArr = [1, 2, 3, 4, 5];

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
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7));

//* ############################################ */

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
console.log(testGreaterThan(10));

//* ############################################ */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {

    return "Yes";

  }

  // Only change code above this line
  return "No";
}
console.log(testLogicalAnd(10));

//* ############################################ */

function testLogicalOr(val) {
  // Only change code below this line

  if (val>20 || val<10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}
console.log(testLogicalOr(15));

//* ############################################ */



//* ############################################ */



//* ############################################ */



//* ############################################ */
