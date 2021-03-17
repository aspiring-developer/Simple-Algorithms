//IIFE
var firstName = 'Harry';
(function(name) {
var greeting = "Hello";
console.log(greeting + " " + name)
}(firstName));



//TODO: Use recursion to add numbers

function recursiveFunction(num) {
  let result = 0;
  while (num > 0) {
    result = num + recursiveFunction(num - 1);
    console.log(num + " <-- num in")
    console.log(result + " <-- result inside while loop")
    return result;
  }
  return 0;
}
let givenNum = 10;
recursiveFunction(givenNum);
console.log(recursiveFunction(givenNum) + " <--Final Result");