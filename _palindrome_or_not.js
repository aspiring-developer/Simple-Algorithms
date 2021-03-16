// TODO: Find if the given string is palindrome or not

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Long way
function checkPalindrome(str) {
  let isPalindrome = '';
  let revStr = [];
  let splitStr = str.split("");

  for (let i = splitStr.length - 1; i >= 0; i--) {
    revStr.push(splitStr[i]);
  }
    if (revStr.toString() === splitStr.toString()) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  return isPalindrome;
}

let givenString = "racecarn";
console.log(checkPalindrome(givenString) + " <--Result1");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Short way
function findIfPalindrome(str) {
let reversedStr = '';
console.log(reversedStr)

for (let i = str.length-1; i >= 0; i--) {
  reversedStr += str[i];
  }
  if(reversedStr === str) {
    return true;
} else {
  return false;
}

}

console.log(findIfPalindrome("seyes") + " <--Result2");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
