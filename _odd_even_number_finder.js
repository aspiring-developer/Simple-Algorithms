//TODO: Find Odd and Even Numbers in an array

function oddEvenFinder(num) {
  let oddNum = [];
  let evenNum = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      oddNum.push(num[i]);
    } else {
      evenNum.push(num[i]);
    }
  }
  return ({ Odd: oddNum, Even: evenNum });
}

let givenNum = [1, 7, 6, 3, 5, 99, 35, 37, 4, 8]
console.table(oddEvenFinder(givenNum));