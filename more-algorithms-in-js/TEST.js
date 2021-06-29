////////////////////////////////////////////////
// STRING REVERSAL
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  //console.log(reversed);
  return reversed;
}
reverseString("Reverse");
////////////////////////////////////////////////

////////////////////////////////////////////////
// PALINDROME CHECK
function palindromeCheck(str) {
  str = str.toLowerCase();
  let result = true;
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    if (reversed === str) {
      result = true;
    } else {
      result = false;
    }
  }
  //console.log(result);
  return result;
}
palindromeCheck("eylle");
////////////////////////////////////////////////

////////////////////////////////////////////////
// INTEGER REVERSAL
function reverseInt(int) {
  int = int.toString();
  let reversed = '';
for (let i = 0; i < int.length; i++) {
  reversed = int[i] + reversed;
  reversed = parseInt(reversed);
}
  console.log(reversed);
  return reversed;
}
reverseInt(12345);
////////////////////////////////////////////////

////////////////////////////////////////////////
// TITLE CASE


////////////////////////////////////////////////

////////////////////////////////////////////////
// MAX OCCURRING CHARACTER


////////////////////////////////////////////////

////////////////////////////////////////////////
//FIZZBUZZ CHALLENGE


////////////////////////////////////////////////

