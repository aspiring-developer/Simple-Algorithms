////IIFE (Immediately Invoked Function Expression)
//var firstName = 'Harry';
//(function(name) {
//var greeting = "Hello";
//console.log(greeting + " " + name)
//}(firstName));

//******************************************** */
class Person {
  constructor() {
    this.firstName = 'Harry';
    this.lastName = 'Potter';
  }
}
console.log(Person)

var john = new Person();
console.log(new Person()); console.log( " ^^^^^ new Person")
var fn = john.firstName;
var ln = john.lastName;
//console.log({fn, ln});
console.log(fn, ln);




//*************************************** */
//function Person() {
//  this.firstName = 'Harry';
//  this.lastName = 'Potter'
//}

//var john = new Person();
//var fn = john.firstName;
//var ln = john.lastName;
////console.log({fn, ln});
//console.log(fn, ln);


//**************************************** */

//class Person {
//  firstName = 'Harry';
//  lastName = 'Potter'
//}

//var john = new Person();
//var fn = john.firstName;
//var ln = john.lastName;
////console.log({fn, ln});
//console.log(fn, ln);
