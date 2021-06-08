function loopTest() {
  var ourArray = [];
  var i = 0;
  while (i < 5) {
    ourArray.push(i);
    i++;
  }
  return ourArray;
}
console.log(loopTest());

//**************************************
//Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
function descending() {
  var myArray = [];
  var i = 5;
  while (i >= 0) {
    myArray.push(i);
    i--;
  }
  return myArray;
}

console.log(descending())
// Only change code below this line

//******************************* */
var myArray2 = [];
// Only change code below this line
for (var i = 1; i <= 5; i++) {
  myArray2.push(i);
}
console.log(myArray2)
//************************************************ */
var myArray3 = []; var myArray4 = [];
// Only change code below this line
for (var i = 1; i <= 9; i++) {
  if (i % 2 != 0) {
    myArray3.push(i);
  } else {
    myArray4.push(i);
  }
}
console.log(myArray3);
console.log(myArray4);

//********************************************** */
var myArray4 = [];
// Only change code below this line
for (var i = 9; i >= 1; i--) {
  if (i % 2 != 0) {
    myArray4.push(i);
  }
}
console.log(myArray4);

//**************************************** */
// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total)