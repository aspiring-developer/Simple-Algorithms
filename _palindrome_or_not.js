// TODO: Find if the given string is palindrome or not

function checkPalindrome(str) {
  let isPalindrome = '';
  let revStr = [];
  let splitStr = str.split("");

  for (let i = splitStr.length - 1; i >= 0; i--) {
    revStr.push(splitStr[i]);
    if (revStr.toString() === splitStr.toString()) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

let givenString = "racecar";
console.log(checkPalindrome(givenString));