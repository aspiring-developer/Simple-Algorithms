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
//console.log(titleCase("make iT TiTlEcaSe"));
///////////////////////////////////////////////
// FINDING MOST OCCURRING CHARACTER
function findOccurringChar(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] > 0) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}
//console.log(findOccurringChar("javascript"));

///////////////////////////////////////////////
/* Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */
// FIND MISSING CHARACTER
function fearNotLetter(str) {
  let result = '';
  let allChars = "abcdefghijklmnopqrstuvwxyz";
  let chunkOut = allChars.substr(allChars.indexOf(str[0]), str.length);
  for (let i = 0; i < chunkOut.length; i++) {
    if (str.indexOf(chunkOut[i]) === -1) {
      result = chunkOut[i];
      return result;
    }
  }
  return undefined;
}

//console.log(fearNotLetter("abce") + " <--abce"); // d
//console.log(fearNotLetter("abcdefghjklmno") + " <--abcdefghjklmno"); // i
//console.log(fearNotLetter("stvwx") + " <--stvwx"); // u
//console.log(fearNotLetter("cdf") + " <--cdf"); // e
//console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

///////////////////////////////////////////////
// FALSY VALUE BOUNCER
function bouncer(arr) {
  let truthy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthy.push(arr[i]);
    }
  }
  return truthy;
}
//console.log(bouncer(["", null, NaN, undefined, false, 0, "Hello", 123]));

///////////////////////////////////////////////
//Sum All Numbers in a RangePassed
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let sorted = arr.sort(function (a, b) { return a - b });
  let startingNum = sorted[0];
  let endingNum = sorted[1];
  let result = 0;
  for (let i = startingNum; i <= endingNum; i++) {
    result += i;
  }
  return result;
}
//console.log(sumAll([5, 1]));
//sumAll([1, 4]);


///////////////////////////////////////////////
//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

function diffArray1(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      console.log(arr2[i]);
      newArr.push(arr2[i]);
    }
    if (arr2.indexOf(arr1[i]) === -1) {
      console.log(arr1[i]);
      newArr.push(arr1[i]);
    }
  }
  //console.log(newArr);
  return newArr;
}
//console.log(diffArray1([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray1([1, "calf", 3, "piglet"], [7, "filly"]));
//diffArray1([1, 2, 3, 5], [1, 2, 3, 4, 5]);

///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////
