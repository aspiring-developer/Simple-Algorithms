// Fibonacci
function fibonacciOrder(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  return fib;
}
// These both work, but need to modify i
//console.log(fibonacciOrder(10)); // need i <= num
//console.log(fibonacciOrder([1, 2, 3, 4, 5,6,7,8])); // need i < num.length

//////////////////////////////////////////////////////////

// Next positive Integer
function nextPositiveInt(arr) {
  let result = 0;
  let increment = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result === 0) {
      increment++;
    };
    if (arr.indexOf(increment) === -1) {
      result = increment;
    }
  }
  return result;
}
//console.log(nextPositiveInt([1, 2, 3, 5, 6, 4, 8, -3, -5, -4]));

///////////////////////////////////////////////////////
// Next positive Integer
function nextPositiveInt1(arr1) {
  let result1 = 0;
  let increment1 = 0;
  while (result1 === 0) {
    increment1++;

    if (arr1.indexOf(increment1) === -1) {
      result1 = increment1;
    }
  }
  return result1;
}
//console.log(nextPositiveInt1([1, 2, 3, 5, 6, 4, 8, 7]));

///////////////////////////////////////////////////////
// String Reversal
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
//console.log(reverseString("Reverse this string"));
///////////////////////////////////////////////////////
// Palindrome Check
function isPalindrome(str) {
  let reversed = '';
  let result = false;
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    if (str === reversed) {
      result = true;
    }
  }
  return result;
}
//console.log(isPalindrome("racecar"));
///////////////////////////////////////////////////////
// Integer Reversal
function reverseInt(num) {
  let result = '';
  let convertToStr = num.toString();
  for (let i = 0; i < convertToStr.length; i++) {
    result = parseInt(convertToStr[i] + result);
  }
  return result;
}
//console.log(reverseInt(123));

///////////////////////////////////////////////////////
// Title Case Words
function titleCase(str) {
  let result = '';
  let upperLetter = '';
  let lowerLetter = '';
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    upperLetter = str[i][0].toUpperCase();
    lowerLetter = str[i].slice(1).toLowerCase();
    result += upperLetter + lowerLetter + ' ';
  }
  return result;
}
//console.log(titleCase('make this sentEnce tiTle case.'));
///////////////////////////////////////////////////////
// Title Case Words
function titleCase1(str1) {
  str1 = str1.toLowerCase().split(' ');
  for (let i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
  }
  return str1.join(' ');
}
//console.log(titleCase1('make this sentEnce tiTle case.'));
///////////////////////////////////////////////////////
// MAX OCCURRING CHARACTER
function maxOccurringChar(str) {
  let observed = [];
  for (let i = 0; i < str.length; i++) {
    if (observed[str[i]] > 0) {
      observed[str[i]]++;
    }
    else {
      observed[str[i]] = 1;
    }
  }
  return observed;
}
//console.log(maxOccurringChar('javascript'));
///////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// FIZZ BUZZ CHALLENGE
function fizzBuzz(num) {
  let result = '';
  for (let i = 0; i <= num; i++) {
    //console.log(i)
    if (i % 3 == 0 && i % 5 == 0) {
      result = 'FizzBuzz';
    }
    else if (i % 3 == 0) {
      result = 'Fizz';
    }
    else if (i % 5 == 0) {
      result = 'Buzz';
    }

    //else {
    //  result = i
    //}
  }
  return result;
}
console.log(fizzBuzz(30));

///////////////////////////////////////////////////////
// ALGORITHM TITLE
//function funcName(params) {

//  return params;
//}
//console.log(funcName('args'));
///////////////////////////////////////////////////////
