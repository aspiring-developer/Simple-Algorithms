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
//* THIS IS THE BEST METHOD
function reverseInteger(num) {
  let reversedNum = 0;
  let remainder = 0;

  while (num != 0) {
    remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
  num = Math.floor(num / 10);
  }
  return reversedNum;
}
console.log(reverseInteger(124));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! NOT THE BEST WAY, BUT IT IS ANOTHER WAY --- ONLY for Study Purpose
function reverseInt(receivingNum) {
  let reversed = receivingNum.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(receivingNum);
  //* This code below works without *Math.sign(receivingNum), but doesn't if needed an operator sign i.e. (-)
  //* return parseInt(reversed);
  }
  console.log("------------------------------------------ ");
  console.log(reverseInt(10594) + " --> From another Function");
  console.log("------------------------------------------ ");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
////* Reverse Integer digits without built-in method
//function reverseIntDigits1(theInt1) {
//  let reversedInt1 = 0;
//  let foundDigit;
//  while (theInt1 > 0) {
//    foundDigit = theInt1 % 10;
//    reversedInt1 += foundDigit;
//    theInt1 = (theInt1 - foundDigit) / 10;
//    let secondFoundDigit = theInt1 % 10;
//    foundDigit = (foundDigit * 10) + secondFoundDigit;
//    let thirdFoundDigit = theInt1;
//    let thirdDigitModulus = (thirdFoundDigit % 10);
//    let actualThirdDigit = (theInt1 - thirdDigitModulus) / 10;
//    foundDigit = (foundDigit * 10) + actualThirdDigit;
//    return foundDigit;
//  }
//  return 0;
//}
//let givenInt1 = 258;
//console.log(` ${reverseIntDigits1(givenInt1)} <--Result no built-in. Given--> ${givenInt1}`);
////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<