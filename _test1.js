//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find next positive integer w/o built-in method
function findNumber(num) {
  let result = [];

  //for (let i = 0; i < num.length; i++) {
  //  if (num[i] >= 0) {
  //    //result[num[i]] = true;
  //    result.push(num[i]);
  //  }
  //}
  for (let i = 0; i <= num.length; i++) {
    console.log(num[i] + " num[i] in for loop")
    console.log(num[i]+1 + " num[i]+1 in for loop")
    console.log(num[i+1] + " num[i+1] in for loop")
    if (num[i]+1 === undefined) {
      return i;
    }
  }
  return "tt";
}

let givenNum2 = [1, 2, 3,4, 5];
console.log(findNumber(givenNum2) + " <--Result without built in method");

console.log("-------------------------------------------");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
