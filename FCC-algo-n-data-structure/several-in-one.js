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
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if(strokes == 1) return names[0]
else if(strokes <= par - 2) return names[1]
else if(strokes == par - 1) return names[2]
else if(strokes == par) return names[3]
else if(strokes == par+1) return names[4]
else if(strokes == par+2) return names[5]
else if(strokes >= par+3) return names[6]

  return strokes;
  // Only change code above this line
}

console.log(golfScore(5, 8));


//* ############################################ */
function caseInSwitch(val) {
  var answer = "";
switch(val){
  case 1:
  answer = "alpha";
  break;
  case 2:
  answer = "beta";
  break;
  case 3:
  answer = "gamma";
  break;
  case 4:
  answer = "delta";
  break;

}
  return answer;
}
console.log(caseInSwitch(3));


//* ############################################ */
//function caseInSwitch(val) {
//  var answer = "";
//  // Only change code below this line
//switch(val){
//  case "alpha":
//  answer = "Alpha";
//  break;
//  case "beta":
//  answer = "Beta";
//  break;
//  case "gamma":
//  answer = "Gamma";
//  break;
//  case "delta":
//  answer = "Delta";
//  break;

//}


//  // Only change code above this line
//  return answer;
//}
//console.log(caseInSwitch("alpha"));


//* ############################################ */
