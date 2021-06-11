function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}
//console.log(randomFraction());
////////////////////////////////////////////
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random()*10);
}
//console.log(randomWholeNum());

//////////////////////////////////////////////
function randomRange(myMin, myMax) {
  // Only change code below this line
  //return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return Math.floor(Math.random() * 11);
  // Only change code above this line
}
//console.log(randomRange());

//////////////////////////////////////////////

function convertToInteger(str) {
  let parsed = parseInt(str);
  return parsed;
  }

// console.log(convertToInteger("56"));

 ///////////////////////////////////
// RADIX
 function convertToInteger(str) {
  let a = parseInt(str, 2)
  return a;
  }

console.log(convertToInteger("10011"));