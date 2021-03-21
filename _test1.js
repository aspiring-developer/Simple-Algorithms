function findNextPosNum(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
//console.log(num[i] + " <-- current num");
let nextNum = num[i]+1;
//console.log(nextNum + " NextNum")
if(!num.includes(nextNum)) {
  result.push(nextNum);
  console.log(nextNum + " nextNumFinal");
 }
 console.log(num.length+2)
 if(result.includes(nextNum) && result.includes(num.length+2)) {
   result.pop();
  }
}
  //console.log(result);
  return result;

}
//let givenNum = [1,2,3,4,5,6,7];  // should return 3
 let givenNum = [1,2,3,5,6];  // should return 4
console.log(findNextPosNum(givenNum) + " <--Final Result");

