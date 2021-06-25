// Modify the dog.sayLegs method to remove any references to dog.
// Use the duck example for guidance.

//let dog = {
//  name: "Spot",
//  numLegs: 4,
//  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//};

//dog.sayLegs();
//////////////////////////////////////////////
//Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

//function Dog() {
//  this.name = "Furke";
//  this.color = "Khairo";
//  this.numLegs = 4;
//}
//console.log(Dog.name);

///////////////////////////////////////////////

//function Dog(name, color, numLegs) {
//  this.name = name;
//  this.color = color;
//  this.numLegs = numLegs;
//}
//const doggy = new Dog("Furke", "Khairo", 4);
//console.log(doggy);
////////////////////////////////////////////

//function Dog() {
//  this.name = "Rupert";
//  this.color = "brown";
//  this.numLegs = 4;
//}
//const hound = new Dog();

////////////////////////////////////////////////
//Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;

}
const terrier = new Dog("Tommy", "white");
//console.log(terrier);
//////////////////////////////////////////////////
// instanceof operator
/* Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House. */
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
//console.log(myHouse instanceof House);

//////////////////////////////////////
//Add the own properties of canary to the array ownProps.
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (const property in canary) {
  //if (canary.hasOwnProperty.call(canary, property)) {
  if (canary.hasOwnProperty) {
    ownProps.push(property)
  }
}
console.log(ownProps);

//////////////////////////////////////
// Add a numLegs property to the prototype of Dog
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");


//////////////////////////////////////
