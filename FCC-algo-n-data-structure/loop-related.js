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
