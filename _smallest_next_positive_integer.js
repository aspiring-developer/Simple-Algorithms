//TODO: Find next smallest positive integer that does not occur in the array
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Solving with built-in method
function solution(num) {
  for (i = 1; i < 1000000; i++) {
    if (!num.includes(i)) return i;
  }
}
let givenNum1 = [6, 3, 2, 4];
console.log(solution(givenNum1) + " <--Result from built in method")
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log("-------------------------------------------");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find next positive integer w/o built-in method
function findNumber(num) {
  let result = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
      result[num[i]] = true;
    }
  }
  for (let i = 1; i <= result.length; i++) {
    if (result[i] === undefined) {
      return i;
    }
  }
  return 1;
}

let givenNum2 = [-1, -2, 1, 2, 4, 5];
console.log(findNumber(givenNum2) + " <--Result without built in method");

console.log("-------------------------------------------");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//* Another way (Local Way):
function findNextPosNum(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
let nextNum = num[i]+1;
if(!num.includes(nextNum)) {
  result.push(nextNum);
 }
 if(result.includes(nextNum) && result.includes(num.length+2)) {
   result.pop();
  }
}
  return result;
}

let givenNum = [1,2,4,5];  // should return 3
 //let givenNum = [1,2,3,4,5,6];  // should return 7
console.log(findNextPosNum(givenNum) + " <--Result local way");
console.log("-------------------------------------------");
