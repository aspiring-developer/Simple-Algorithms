// Replace Loops using Recursion
// Write a recursive function, sum(arr, n), that returns
// the sum of the first n elements of an array arr.

function sum(arr, n) {
  // Only change code below this line
  let result = 0;
  if (n > 0) {
    result = sum(arr, n - 1) + arr[n - 1];
  }
  return result;
  // Only change code above this line
}
// console.log(sum([2, 3, 4], 1)); // 2
////////////////////////////////////////////////////
// Array of Object Profile Lookup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName)
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else {
        return "No such property";
      }
  }
  return "No such contact";
  // Only change code above this line
}
//console.log(lookUpProfile("Akira", "likes"));
//lookUpProfile("Kristian", "lastName");
//lookUpProfile("Akira", "likes");
////////////////////////////////////////////////////
// Generate Random Fractions with JavaScript
// Change randomFraction to return a random number instead of returning 0.
function randomFraction() {

  // Only change code below this line
  let randomNumber = Math.random();


  return randomNumber;

  // Only change code above this line
}
//console.log(randomFraction());
////////////////////////////////////////////////////
// Generate Random Whole Numbers with JavaScript
// Use this technique to generate and return a random whole number between 0 and 9.
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}
//console.log(randomWholeNum());
////////////////////////////////////////////////////
// Generate Random Whole Numbers within a Range
/* Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
 */
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}
//console.log(randomRange(5, 10));
////////////////////////////////////////////////////
// Use the parseInt Function
// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
  // console.log(typeof(str)); console.log("^^^ Before parseInt");
  str = parseInt(str);
  // console.log(typeof(str)); console.log("^^^ After parseInt");
  return str;
}
//console.log(convertToInteger("56")); console.log("^^^ Result");
////////////////////////////////////////////////////
// RAdix with parseInt
function convertToInteger(str) {
  let parsedStr = parseInt(str, 2);
  return parsedStr;
}

// console.log(convertToInteger("10011"));

////////////////////////////////////////////////////
// Ternary operator
/* Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.*/
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
//console.log(checkEqual(2, 2));
checkEqual(2, 2);
////////////////////////////////////////////////////
// Multiple Ternary operator
// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
function checkSign(num) {
  return (num>0)?"positive":(num<0)?"negative":"zero";
}
//console.log(checkSign(0));
////////////////////////////////////////////////////
// Use Recursion to Create a Countdown
/* The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */

// Only change code below this line
function countdown(n){
  let result = [];

  return result;
}
console.log(countdown(5))
// Only change code above this line

////////////////////////////////////////////////////

