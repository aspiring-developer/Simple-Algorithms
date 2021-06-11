//IF-ELSE:
function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
//console.log(findGreater(10, 15));
/////////////////////////////////////
//TERNARY
function findGreater(a, b) {
  return (
    a > b ? "a is greater" : "b is greater"
  )
}
console.log(findGreater(20, 15));
/////////////////////////////////////////
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual("2", 2));

/////////////////////////////////////////////
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
      : "zero"
}
console.log(checkSign(-1));