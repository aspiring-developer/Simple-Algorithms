//////////////////////////////////////////
// Record Collection
// Setup
/*
    Your function must always return the entire record collection object.
    If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
    If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    If value is an empty string, delete the given prop property from the album.
 */
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === 'tracks' && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== "") {
    records[id][prop].push(value)
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

//////////////////////////////////////////////////////////////////////////////////
// Use Recursion to Create a Range of Numbers
/* The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */

function rangeOfNumbers(startNum, endNum) {
  let result = [];
  //if (endNum >= startNum) {
  if (startNum <= endNum) {
    result = rangeOfNumbers(startNum, endNum - 1);
    result.push(endNum);
    return result;
  }
  return [];
};
console.log(rangeOfNumbers(2, 6));

//////////////////////////////////////////////////////////////////////////////////
// Use Recursion to Create a Countdown
/* The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */

// Only change code below this line
function countdown(n) {
  let result = [];
  if (n > 0) {
    result = countdown(n - 1);
    result.unshift(n);
    return result;
  }
  else {
    return [];
  }
}
//console.log(countdown(5));
// Only change code above this line
//////////////////////////////////////////////////////////////////////////////////
// Generate Random Whole Numbers within a Range
/* Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
 */
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}
//console.log(randomRange(5, 10));
//////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////