///////////////////////////////////////
// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["name"] = "Happy Coder";
//console.log(myDog.name);
// Only change code below this line
///////////////////////////////////////
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
//let value = val;
result = lookup[val];
  // Only change code above this line
  return result;
}
//console.log(phoneticLookup("delta"));
phoneticLookup("delta");
/////////////////////////////////////////
// TESTING OBJECTS FOR PROPERTIES
// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    console.log(obj.hasOwnProperty(checkProp));
  return obj[checkProp];

  } else {
    return "Not Found";
  }
  // Only change code above this line
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")); // should return the string pony.
/////////////////////////////////////////

////////////////////////////////////////

/////////////////////////////////////////

//////////////////////////////////////////