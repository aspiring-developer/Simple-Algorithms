///////////////////////////////////////////////
//....... STRING REVERSAL ....................
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
//console.log(reverseString("Reverse This"))
///////////////////////////////////////////////
///////////////////////////////////////////////
//....... STRING REVERSAL ....................
function palindromeCheck(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    if (str === reversed) {
      return true;
    }
  }
  return false;
}
console.log(palindromeCheck("racecar"))
    ///////////////////////////////////////////////