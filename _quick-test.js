//IIFE (Immediately Invoked Function Expression)
var firstName = 'Harry';
(function(name) {
var greeting = "Hello";
console.log(greeting + " " + name)
}(firstName));
