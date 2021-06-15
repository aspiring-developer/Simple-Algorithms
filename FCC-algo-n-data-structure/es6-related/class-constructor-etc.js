/* Use the class keyword and write a constructor to create the Vegetable class.
The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor. */

class Vegetable {
  constructor(name) {
    this.name = name
  }
}


// Only change code above this line
const carrot = new Vegetable('carrot');
//console.log(carrot.name); // Should display 'carrot'

///////////////////////////////////////////////////
//GETTERS AND SETTERS

// Only change code below this line
class Thermostat {
  constructor(fTemp) {
    this.temp = 5 / 9 * (fTemp - 32);
  };

  get temperature() {
    return this.temp;
  }

  set temperature(updatedTemp) {
    this.temp = updatedTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(68); // Setting in temperature scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
