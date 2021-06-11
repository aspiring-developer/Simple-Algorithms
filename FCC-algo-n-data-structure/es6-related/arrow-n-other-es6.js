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
console.log(sum(1, " Hello ", 3)) // prints 1 Hello 3 if using '+' concatenation operator // with '*', prints NaN
console.log(sum(1, 5, 3)) // prints 9 with '+' and 15 with '*'