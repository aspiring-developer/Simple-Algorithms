//*********************** */
//Factorial
function factorial1(num) {
  let factorialSum = 1;
  for (let i = 0; i < num.length; i++) {
    factorialSum *= num[i];
  }
  return factorialSum;
}
let num = [1, 2, 3, 4, 5];
console.log(factorial1(num));

//*********************************** */
function factorial2(num2) {
  let factorialSum2 = 1;
  for (let i = 1; i <= num2; i++) {
    factorialSum2 *= i;
  }
  return factorialSum2;
}
let num2 = 5;
console.log(factorial2(num2));

