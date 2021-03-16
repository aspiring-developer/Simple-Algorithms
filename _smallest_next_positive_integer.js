//TODO: Find smallest positive integer that does not occur in the array
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

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find next positive integer

function findNumber(values) {
  let result = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] >= 0) {
      result[values[i]] = true;
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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
