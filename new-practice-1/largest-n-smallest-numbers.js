// Largest and Smallest Number
// LARGEST NUM
function largestNumberFinder(num) {
  let largestNum = -1000000;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largestNum) {
      largestNum = num[i];
    }
  }
  return largestNum;
}
const givenNum = [22, 3, 989, 65, 777, 1, 9098, 9999];
console.log(largestNumberFinder(givenNum));

//****************************************** */
// SMALLEST NUM
function smallestNumberFinder(num) {
  let smallestNum = 1000000;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < smallestNum) smallestNum = num[i]

  }
  return smallestNum;
}
console.log(smallestNumberFinder(givenNum))