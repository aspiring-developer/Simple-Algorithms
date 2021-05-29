//******************************* */
//Palindrome
function palindromeCheck(str) {
  let reversedStr = str.split('').reverse().join('');
  if (str.indexOf(reversedStr) !== -1) {
    console.log("It is a palindrome!");
  } else {
    console.log("It is not a palindrome!");
  }
}
palindromeCheck("eye");

//*********************************** */
function palindromeCheck1(str1) {
  let reversedStr1 = str1.split('').reverse().join('');
  if (str1 === reversedStr1) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeCheck1("eye"));

//*********************************** */
// Checking/Filtering with REGEX
function palindromeCheck2(str2) {
  let checkWithRegEx = str2.toLowerCase().replace(/[\W_]/g, "");
  let reversedStr2 = checkWithRegEx.split('').reverse().join('');
  if (checkWithRegEx === reversedStr2) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeCheck2("race car")); // true because regex removed the non-alpha numeric character