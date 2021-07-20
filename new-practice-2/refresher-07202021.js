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
    console.log(contacts[i]);
    if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
      console.log(contacts[i].firstName);
    }
    console.log(contacts[i][prop]);
    return contacts[i].prop;
    //else {
    //  return "No such property";
    //}
  }
  return "No such property";
  // Only change code above this line
}
//console.log(lookUpProfile("Akira", "likes"));
lookUpProfile("Kristian", "lastName");
//lookUpProfile("Akira", "likes");
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


