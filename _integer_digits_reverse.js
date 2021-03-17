//TODO: Reverse given integer digit: i.e. 389 ==> 983
//* toString + reverse + parseInt method
//function reverseIntDigits(theInt) {
//  let convertedInt = [];
//  console.log(theInt + " <--Original Int");
//  let theIntConvertedToArr = theInt.toString();
//  for (let i = 0; i < theIntConvertedToArr.length; i++) {
//    convertedInt.push(theIntConvertedToArr[i]);
//  }
//  let reversedInt = parseInt(convertedInt.reverse().join(''));
//  return reversedInt;
//}
//let givenInt = 389;
//console.log(reverseIntDigits(givenInt) + " <--Reversed Result");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* without built-in method
function reverseIntDigits(theInt) {
  //let convertedInt = [];
  //console.log(theInt + " <--Original Int");
  //let theIntConvertedToArr = theInt.toString();
  //for (let i = 0; i < theIntConvertedToArr.length; i++) {
  //  convertedInt.push(theIntConvertedToArr[i]);
  //}
  //let reversedInt = parseInt(convertedInt.reverse().join(''));
  //return reversedInt;
}
let givenInt = 389;
console.log(reverseIntDigits(givenInt) + " <--Reversed Result");



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<