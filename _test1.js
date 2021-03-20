function findNextPosNum(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
let nextNum = num[i] + 1;
let currentNum = num[i];
console.log(currentNum + " <-- current num");
console.log(" ----- " + nextNum + " <-- next num");
//console.log(nextNum + " <-- next num");
if(nextNum !== currentNum) {
 console.log(nextNum + " if block");
 result.push(nextNum)
}
else {
// console.log(nextNum + " else block")
result.push(nextNum  + " else block");
}

  }
  //console.log(result);
  return result;
}

let givenNum = [1,2,4];  // should return 3
// let givenNum = [1,2,3];  // should return 4
console.log(findNextPosNum(givenNum) + " <--Final Result");

