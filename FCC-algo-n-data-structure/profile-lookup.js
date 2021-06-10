// Setup
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

//WORKING FINE

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) { // NOTE: if(prop in contacts[i]) DOES SAME
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Harry", "likes"));

////////////////////////////////////////////////////////////

//ANOTHER WAY:
function lookUpProfile1(firstName, prop) {
  var value;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
      value = contacts[i][prop];
      break;
    }
    if (contacts[i].hasOwnProperty(firstName) === false) {
      value = "No such contact";
    }
    if (contacts[i].hasOwnProperty(prop) === false) {
      value = "No such property";
    }
  }
  return value;
}
console.log(lookUpProfile1("Akira", "likes"))


///////////////////////////////////////////////////////
