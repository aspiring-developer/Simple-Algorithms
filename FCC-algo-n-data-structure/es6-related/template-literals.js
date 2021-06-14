const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(function(eachItem) {
    return `<li class="text-warning">${eachItem}</li>`
  })
  return failureItems;
}

const failuresList = makeList(result.failure);
//console.log(failuresList)

////////////////////////////////////////////////////////////////

//Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
//..............................................
const createPerson1 = (name1, age1, gender1) => {
  return {name1, age1, gender1};
};
//console.log(createPerson1("Ram", "Sam", "Harry"));

//////////////////////////////////////////

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

///////////////////////////////////////////
