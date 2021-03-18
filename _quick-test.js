////IIFE (Immediately Invoked Function Expression)
//var firstName = 'Harry';
//(function(name) {
//var greeting = "Hello";
//console.log(greeting + " " + name)
//}(firstName));

//******************************************** */
//class Person {
//  constructor() {
//    this.firstName = 'Harry';
//    this.lastName = 'Potter';
//  }
//}
//console.log(Person)

//var john = new Person();
//console.log(new Person()); console.log( " ^^^^^ new Person")
//var fn = john.firstName;
//var ln = john.lastName;
////console.log({fn, ln});
//console.log(fn, ln);




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



function myFunc(num) {
  console.log(num + "  Num 1st")
  let foundNum;
  let result = 0;
  let newNum;
  while(num != 0) {
   foundNum = num % 10;
   newNum = (num - foundNum) / 10;
   //console.log(newNum);
result = foundNum;
//console.log(result)
    //console.log(newNum)
  }
  console.log(result + " result");
  return 0;
}
let givenNum = 124;
console.log(myFunc(givenNum));