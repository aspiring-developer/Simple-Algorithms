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
function reverseIntDigits1(theInt1) {
  let reversedInt1 = 0;
  let foundDigit;
  while (theInt1 > 0){
    foundDigit = theInt1 % 10;
    reversedInt1 += foundDigit;
//console.log(reversedInt1 + " <--First found Digit")
    theInt1 = (theInt1 - foundDigit) /10;
    //console.log(theInt1 + " <-- Here 13")

    let secondFoundDigit = theInt1 % 10;
    //console.log(secondFoundDigit + " <-- 2nd found digit");

foundDigit = (foundDigit *10) + secondFoundDigit;
//console.log(foundDigit + " <-- found digit after 2nd");

let thirdFoundDigit = theInt1;
//console.log(theInt1);
let thirdDigitModulus = (thirdFoundDigit %10);
//console.log(thirdDigitModulus + " <-- third digit");
let actualThirdDigit = (theInt1 - thirdDigitModulus) /10;
//console.log(actualThirdDigit + " <-- Actual 3rd digit")
  foundDigit = (foundDigit * 10) + actualThirdDigit;
  //console.log(foundDigit + " <-- Finally");
  return foundDigit;
  }
  return 0;

}
let givenInt1 = 258;
console.log(` ${reverseIntDigits1(givenInt1)} <--Result no built-in. Given--> ${givenInt1 }`);



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