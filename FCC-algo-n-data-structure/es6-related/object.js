//add three more entries to it: bananas with a value of 13,
// grapes with a value of 35, and strawberries with a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13,
  foods.grapes = 35,
  foods.strawberries = 27

// Only change code above this line

//console.log(foods);

//////////////////////////////////////////////////
// Modify an Object Nested Within an Object
// Set the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

//console.log(userActivity);

//////////////////////////////////////////////////
// Access Property Names with Bracket Notation
// Return the current value of the scannedItem key in the foods object.
// You can assume that only valid keys will be provided as an argument
// to checkInventory.
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods2[scannedItem];
  // Only change code above this line
}

//console.log(checkInventory("apples"));

//////////////////////////////////////////////////
// Use the delete Keyword to Remove Object Properties
let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods3.oranges;
delete foods3['plums'];
delete foods3['strawberries'];
// Only change code above this line

//console.log(foods3);

/////////////////////////////////////////////////4
// Check if an Object has a Property
//Finish writing the function so that it returns true if the object passed
// to it contains all four names, Alan, Jeff, Sarah and Ryan and
// returns false otherwise.
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) {
    return true
  } else {
    return false;
  }
  // Only change code above this line
}

//console.log(isEveryoneHere(users));

//////////////////////////////////////////////
// Iterate Through the Keys of an Object with a for...in Statement
// Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

let users4 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj4) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj4) {
    //console.log(usersObj4[user].online);
    if (usersObj4[user].online === true) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}
//countOnline(users4);
//console.log(countOnline(users4));


/////////////////////////////////////

//SAMPLE:
//var ourStorage = {
//  "desk":    {
//      "drawer": "stapler"
//    },
//  "cabinet": {
//      "top drawer": {
//        "folder1": "a file",
//        "folder2": "secrets"
//      },
//      "bottom drawer": "soda"
//    }
//  };
// console.log(ourStorage.cabinet["top drawer"].folder2); // Outputs -> "secrets"

///////////////////////////////////////////
// Generate an Array of All Object Keys with Object.keys()

// Finish writing the getArrayOfUsers function so that it returns an array
// containing all the properties in the object it receives as an argument.

let users5 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  // Only change code below this line
let keys = Object.keys(obj);
//console.log(keys + " <-----Keys");
  // Only change code above this line
}
getArrayOfUsers(users5);

///////////////////////////////////////////////
/* Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array. */
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}
console.log(addFriend(user, 'Pete'));