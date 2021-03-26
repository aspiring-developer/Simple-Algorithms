//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//function fibSequence(num) {
//let fib = [0,1];
//for (let i = 2; i <= num; i++) {
//  fib[i] = fib[i-2] + fib[i-1];
//}
//return fib;
//}
//console.log(fibSequence(7));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//function repeatedInt(receivingNum) {
//let observed = [];
//let num = receivingNum.sort();
//for (let i = 0; i < num.length; i++) {
//  if(observed[num[i]]) {
//    return num[i];
//  } else {
//    observed[num[i]] = num[i];
//  }
//}
//  return observed + " <--Result";
//}
//let givenNum = [1,2,4,6,3,7,6,2];
//console.log(repeatedInt(givenNum));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function recursion(theNum) {
let result = 0;
while(theNum >0) {
  result = theNum + recursion(theNum-1);
  return result;
}
  return 0;
}
console.log(recursion(10));









//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<




















//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* THIS IS THE BEST METHOD
//function reverseInteger(num) {
//  let reversedNum = 0;
//  let remainder = 0;

//  while (num != 0) {
//    remainder = num % 10;
//    reversedNum = reversedNum * 10 + remainder;
//  num = Math.floor(num / 10);
//  }
//  return reversedNum;
//}
//console.log(reverseInteger(124));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! NOT THE BEST WAY, BUT IT IS ANOTHER WAY --- ONLY for Study Purpose
//function reverseInt(receivingNum) {
//  let reversed = receivingNum.toString().split("").reverse().join("");
//  return parseInt(reversed) * Math.sign(receivingNum);
//  //* This code below works without *Math.sign(receivingNum), but doesn't if needed an operator sign i.e. (-)
//  //* return parseInt(reversed);
//  }
//  console.log("------------------------------------------ ");
//  console.log(reverseInt(10594) + " --> From another Function");
//  console.log("------------------------------------------ ");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<