// ARROW FUNCTION

const myFunc = () => "value";
//console.log(myFunc()); // print value

////////////////////////////////////////
let myValue = "value1"
const myFunc1 = () => myValue;
//console.log(myFunc1()); // same as above, but value1 is assigned to a variable

/////////////////////////////////////////
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

//console.log(myConcat([1, 2], [3, 4, 5])); // prints [ 1, 2, 3, 4, 5 ]

//////////////////////////////////////////
//DEFAULT PARAMETERS WITH ARROW FUNCTION
const greeting = (name = "Anonymous") => "Hello " + name;

//console.log(greeting("John")); // prints Hello John
//console.log(greeting()); // prints Hello Anonymous

//DEFAULT PARAMETERS WITH REGULAR FUNCTION
function greeting1(name1 = "John1", name2) {
  return "Hello " + name1 + " " + name2;
}

//console.log(greeting1("John1", "Doe")); // prints Hello John1 Doe
//console.log(greeting1()); // prints Hello John1 undefined (default prints, but another not)

//////////////////////////////////////////
//REST PARAMETER
const sum = (...args) => {
  return args.reduce((a, b) => a * b, 1);
}
//console.log(sum(1, " Hello ", 3)) // prints 1 Hello 3 if using '+' concatenation operator // with '*', prints NaN
//console.log(sum(1, 5, 3)) // prints 9 with '+' and 15 with '*'
///////////////////////////////////////////
//  SPREAD OPERATOR
// Math.max expects comma separated arguments, So for array, need to use .apply (see below)
var maximus = Math.max(6, 89, 3, 45, 650, 1);
// console.log(maximus); // prints 650

// Math.max with .apply for array
var arr1 = [6, 89, 3, 45];
var maximus1 = Math.max.apply(null, arr1);
// console.log(maximus1); // prints 89

// Math.max with SPREAD operator (NO .apply USED)
var arr2 = [16, 189, 13, 145];
var maximus2 = Math.max(...arr2);
//console.log(maximus2); // prints 189

//////////////////////////////////////////
// Copy all parameter in arr3 to arr4
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;

arr4 = [...arr3];  // copies arr3 to arr4

//console.log(arr4); // prints [JAN FEB MAR APR MAY]

//////////////////////////////////////////

//DESTRUCTURING ASSIGNMENTS VALUES
// Without destructuring first
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
//console.log(name);
//console.log(age);

//...................................
//Destructuring same object properties
const user1 = { name1: 'John Doe', age1: 34 };

const { name1, age1 } = user1;

//.....................................

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow} = HIGH_TEMPERATURES;
//console.log(tomorrow);
//////////////////////////////////////////

const HIGH_TEMPERATURES1 = {yesterday1: 75, today1: 77, tomorrow1: 80};
//const highToday1 = HIGH_TEMPERATURES1.today1;
//const highTomorrow1 = HIGH_TEMPERATURES1.tomorrow1;
const {yesterday1: yesterdayValue, today1: todayValue, tomorrow1: tomorrowValue} = HIGH_TEMPERATURES1;
//console.log(yesterdayValue);  // prints 75
////////////////////////////////////////////////

// DESTRUCTURING FROM NESTED OBJECT(S)

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday, highToday);




