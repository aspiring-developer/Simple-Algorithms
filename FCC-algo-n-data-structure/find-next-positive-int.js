

///////////////////////////////////////////////
function testing(arr) {

  let result = 0;

  let increment = 0;

  while (result === 0) {
    increment++;
    if (arr.indexOf(increment) === -1) {
      result = increment;
    }
  }
  return result;
}
let givenArray = [1, 3, 6, 4, 1, 2];
//let givenArray = [-1, -3];
console.log(testing(givenArray));  // 5
///////////////////////////////////////////////