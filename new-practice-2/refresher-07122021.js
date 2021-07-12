///////////////////////////////////////////////
// STRING REVERSAL
function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}
//console.log(reverseString("Reverse this string"));

///////////////////////////////////////////////
// PALINDROME CHECK
function palindromeCheck(str) {
  let reverseWord = '';
  for (let i = 0; i < str.length; i++) {
    reverseWord = str[i] + reverseWord;
    if (reverseWord === str) return true;
  }
  return false;
}
//console.log(palindromeCheck("racecar"));
///////////////////////////////////////////////
// PALINDROME CHECK
function integerReversal(num) {
  let convertedToString = num.toString();
  let reverseInt = '';
  for (let i = 0; i < convertedToString.length; i++) {
    reverseInt = convertedToString[i] + reverseInt;
  }
  return reverseInt;
}
//console.log(integerReversal(12304));
///////////////////////////////////////////////
// PALINDROME CHECK
function titleCase(str) {
  let combinedInArray = [];
  let firstUpper = [];
  let otherLetters = [];
  let resultConverted = '';
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    firstUpper.push(str[i][0].toUpperCase());
    otherLetters.push(str[i].slice(1));
    combinedInArray.push(firstUpper[i].concat(otherLetters[i]));
    resultConverted = combinedInArray.join(' ');
  }
  return resultConverted;
}
console.log(titleCase("make iT TiTlEcaSe"));
///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////
