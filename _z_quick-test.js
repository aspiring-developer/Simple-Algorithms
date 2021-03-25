

//function newFunction(num) {
//  let fib = [0, 1];
//  for (let i = 2; i <= num; i++) {
//    fib[i] = fib[i - 2] + fib[i - 1];

//  }
//  return fib;
//}
//let givenNum = 10;
//console.log(newFunction(givenNum));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* fib sequence
//function fib(num) {
//  let fib = [0, 1];
//  for (let i = 2; i <= num; i++) {
//    fib[i] = fib[i - 2] + fib[i - 1];

//  }
//  return fib;
//}
//console.log(fib(7));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* recursive sum
//function recursive(num) {
//  let sum = 0;
//  while (num > 0) {
//    sum = num + recursive(num - 1);
//return sum;
//  }
//  return 0;
//}
//console.log(recursive(10));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* THIS IS THE BEST METHOD
function reverseInteger(num) {
  let reversedNum = 0;
  let remainder = 0;

  while (num != 0) {
    remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
  num = Math.floor(num / 10);
  }
  return reversedNum;
}
console.log(reverseInteger(124));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! NOT THE BEST WAY, BUT IT IS ANOTHER WAY --- ONLY for Study Purpose
function reverseInt(receivingNum) {
  let reversed = receivingNum.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(receivingNum);
  //* This code below works without *Math.sign(receivingNum), but doesn't if needed an operator sign i.e. (-)
  //* return parseInt(reversed);
  }
  console.log("------------------------------------------ ");
  console.log(reverseInt(10594) + " --> From another Function");
  console.log("------------------------------------------ ");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<