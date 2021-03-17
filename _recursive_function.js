//TODO: Use recursion to add numbers
//* THIS IS SHORTER, BUT BELOW IS EASY TO UNDERSTAND VERSION
function recursiveFunction(num) {
  if (num > 0) {
    return num + recursiveFunction(num - 1);
  }
  return 0;
}
let givenNum = 10;
recursiveFunction(givenNum);
console.log(recursiveFunction(givenNum) + " <--Final Result");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//TODO: Use recursion to add numbers
//* THIS IS LONGER, BUT HAS MORE EXPLANATION
function recursiveFunction1(num1) {
  let result1 = 0;
  if (num1 > 0) {
    result1 += num1 + recursiveFunction(num1 - 1);
    return result1;
  } else {
    return 0;
  }
}
let givenNum1 = 5;
recursiveFunction1(givenNum1);
console.log(recursiveFunction1(givenNum1) + " <--Final Result");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



