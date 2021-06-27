//1. String Reversal
//2. Validate Palindromes
//3. Integer Reversal
//4. Capitalize Letters
//5. Find The Max Character
//6. FizzBuzz Challenge

/////////////////////////////////////////////////////////////
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
//console.log(reverseString('hello'));

/////////////////////////////////////////////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
}
//console.log(isPalindrome('racecar'));

/////////////////////////////////////////////////////////////

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let convertedToStr = int.toString();
  let reversedInt = 0;
  for (let i = 0; i < convertedToStr.length; i++) {
    reversedInt = convertedToStr[i] + reversedInt;
    reversedInt = parseInt(reversedInt);
  }
  return reversedInt;
}
//console.log(reverseInt(12345));

/////////////////////////////////////////////////////////////

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let convertToArr = str.toLowerCase().split(' ');
  let capitalizedChar = '';
  let otherChar = '';
  let result = '';

  for (let i = 0; i < convertToArr.length; i++) {
    capitalizedChar = convertToArr[i][0].toUpperCase();
    otherChar = convertToArr[i].slice(1);
    result += (capitalizedChar + otherChar + ' ');
  }
  return result;
}
//capitalizeLetters('i love javascript')
//console.log(capitalizeLetters('i love javascript'));

/////////////////////////////////////////////////////////////

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
//function maxCharacter(str) {
//  let splitted = str.split('')
//  for (let i = 0; i < splitted.length; i++) {
//    if (splitted[splitted[i]] > 0) {
//      splitted[splitted[i]] ++;
//    }
//    else {
//      splitted[splitted[i]] = 1;
//    }
//  }
//  return splitted;
//}
//console.log(maxCharacter('javascript'));
//console.log(maxCharacter('which character occurs more?'));

//............................................
function maxCharacter(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    console.log(str[i] + " <--str[i]");
    console.log(str[str[i]] + " <--str[str[i]]"); // this is undefined, but it works below, why?
    if (str[str[i]] > 0) {
      str[str[i]]++;
    }
    else {
      str[str[i]] = 1;
    }
  }
  return str;
}
//console.log(maxCharacter('javascript'));
//console.log(maxCharacter('javascript'));

/////////////////////////////////////////////////////////////

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3,
//instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let output = '';
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FizzBuzz" + ', ';
    } else if (i % 3 === 0) {
      output += "Fizz" + ', ';
    }
    else if (i % 5 === 0) {
      output += "Buzz" + ', ';
    } else {
      output += i + ', ';
    }


  }

  return output;
}
console.log(fizzBuzz());

/////////////////////////////////////////////////////////////



