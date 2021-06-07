var myDog = {
  // Only change code below this line
  name: "Barking Dog",
  legs: 4,
  tails: 1,
  friends1: ["human", "puppies"],
  friends2: {a: "human", b: "puppies"},
  "Spaced property": "Spaced property value"

  // Only change code above this line
  };
  console.log(myDog.name);
  console.log(myDog.friends1[1]);
  console.log(myDog.friends2.b);
  console.log(myDog["Spaced property"]);

  //*************************************** */

  // Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
console.log(entreeValue, drinkValue);

//****************************************** */
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber =16;       // Change this line
var player = testObj[playerNumber];   // Change this line
console.log(player);

//************************************************ */
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
const changed1 = myDog.friends[1]= "New Friend";
console.log(changed1 + " <-- ")
console.log(myDog.friends)