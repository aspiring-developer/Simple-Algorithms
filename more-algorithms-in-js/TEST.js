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
  //console.log(reversed);
  return reversed;
}
reverseInt(12345);
////////////////////////////////////////////////

////////////////////////////////////////////////
// TITLE CASE
function titleCase(str) {
  str = str.split(' ');
  let firstUpper = '';
  let otherLower = '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    firstUpper = str[i][0].toUpperCase();
    otherLower = str[i].slice(1).toLowerCase();
    result += firstUpper + otherLower + ' ';
  }
  //console.log(result);
  return result;
}
titleCase("change this sentence to title case.");

////////////////////////////////////////////////

////////////////////////////////////////////////
// MAX OCCURRING CHARACTER
function maxChar(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[str[i]] > 0) {
      str[str[i]]++;
    } else {
      str[str[i]] = 1;
    }
  }
  return str;
}
//maxChar("javascript"); // result a:2 (a = 2)
//console.log(maxChar("javascript")); // result a:2 (a = 2)

////////////////////////////////////////////////

////////////////////////////////////////////////
//FIZZBUZZ CHALLENGE
function fizzBuzz(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      //console.log("FizzBuzz");
      result = "FizzBuzz";
    }
    else if (i % 3 == 0) {
      //console.log("Fizz");
      result = "Fizz";

    } else if (i % 5 == 0) {
      //console.log("Buzz");
      result = "Buzz";
    }
    else {
      //console.log(i);
    }
  }
  return result;
}
fizzBuzz(16);
//console.log(fizzBuzz(16));

////////////////////////////////////////////////

