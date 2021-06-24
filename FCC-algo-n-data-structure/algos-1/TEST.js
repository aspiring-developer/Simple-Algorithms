

///////////////////////////////////////////////
function testing(arr) {

  let result = 0;

  let increment = 0;

  while (result === 0) {
    ++increment;
    console.log(increment)
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
///////////////////////////////////////////////
//function testing(arr) {
//  let result = 0;
//for (let i = 0; i < arr.length; i++) {
//  if(arr[i+1] === arr[i] + 1) {
//    result = arr[i];
//  }

//}

//  return result;
//}
//let givenArray = [1,3,6,4,1,2];
//console.log(givenArray);  // 5
///////////////////////////////////////////////

