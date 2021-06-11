//IF-ELSE:
function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
//console.log(findGreater(10, 15));
/////////////////////////////////////
//TERNARY
function findGreater(a, b) {
  return (
    a > b ? "a is greater" : "b is greater"
  )
}
console.log(findGreater(20, 15));
/////////////////////////////////////////
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual("2", 2));

/////////////////////////////////////////////
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
      : "zero"
}
console.log(checkSign(-1));

////////////////////////////////////////////////

// VAR, LET, CONST SCOPES:

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); // prints 3

////////////////////////////////////////

let printNumTwo1;
for (let k = 0; k < 3; k++) {
  if (k === 2) {
    printNumTwo1 = function () {
      return k;
    };
  }
}
console.log(printNumTwo1()); // prints 2
//console.log(k); // Error: prints k is not defined

////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
var numArray = [];
var j;
for (j = 0; j < 3; j++) {
  numArray.push(j);
}
console.log(numArray);
console.log(j);
///////////////////////////////////////
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s) // prints [2,5,7]
  // Using s = [2, 5, 7] would be invalid
}
editInPlace();