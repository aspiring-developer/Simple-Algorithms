//TODO: Find a missing number from a series of numbers

function missingNumberFinder(num) {
  let missingNum = 0;
  // Find max and min numbers to get the range
  let maxNum = Math.max.apply(Math, num);
  let minNum = Math.min.apply(Math, num);
  console.log(`Max: ${maxNum} | Min: ${minNum}`);

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Find sum of given numbers
  function sumOfGivenFinder(num) {
    let sumOfGiven = 0;
    for (let i = 0; i < num.length; i++) {
      sumOfGiven += num[i];
    }
    return sumOfGiven;
  }
  console.log(`${sumOfGivenFinder(givenNum)} <--Sum of given`);
  sumOfGivenFinder(givenNum);
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Find sum of given numbers
  function sumOfConsecutiveFinder(min, max) {
    let sumOfConsecutive = 0;
    for (let i = min; i <= max; i++) {
      sumOfConsecutive += i;
    }
    return sumOfConsecutive;
  }
  console.log(`${sumOfConsecutiveFinder(minNum, maxNum)} <--Sum of consecutive`);
  sumOfConsecutiveFinder(minNum, maxNum);
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Find the missing number
  missingNum = sumOfConsecutiveFinder(minNum, maxNum) - sumOfGivenFinder(givenNum);
  console.log(`${missingNum} <--Missing number`);
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  return missingNum;
}

let givenNum = [6, 8, 9, 5, 10, 4, 3];
missingNumberFinder(givenNum);