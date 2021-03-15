//TODO: Find min and Min number in an array

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find max Number
function maxFinder(num) {
  let maxNum = -1000000;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNum) {
      maxNum = num[i];
    }
  }
  return maxNum;
}
let givenNumForMax = [18, 6, 9, 45, 30, 29];
console.log(`${maxFinder(givenNumForMax)} <--Result (Max Num)`);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find Min Number
function minFinder(num) {
  let minNum = 1000000;

  for (let i = 0; i < num.length; i++) {
    if (num[i] < minNum) {
      minNum = num[i];
    }
  }
  return minNum;
}
let givenNumForMin = [18, 6, 9, 45, 30, 29];
console.log(`${minFinder(givenNumForMin)} <--Result (Min Num)`);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Find Max and Min Numbers using a single function
function maxMinFinder(num) {
  let _maxNum = -1000000;
  let _minNum = 1000000;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > _maxNum) {
      _maxNum = num[i];
    }
    if (num[i] < _minNum) {
      _minNum = num[i];
    }
  }
  let result = console.log({Max: _maxNum, Min: _minNum});
  return result;
}
let givenNumForMaxMin = [18, 6, 9, 45, 30, 29];
maxMinFinder(givenNumForMaxMin);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

