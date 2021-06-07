//* ######################################## */

function isEqual(a, b) {
  return a === b; // Returns true or false
}
//console.log(isEqual(2, 2));

//* ######################################## */

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

//* ######################################## */
// Setup
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(0, 2));

//* ######################################## */
function recursion(num) {
  let sum = 0;
  if (num > 0) {
    sum = num + recursion(num - 1);
  }
  return sum;
}
console.log(recursion(10));

//* ######################################## */

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count++;
    return count + " Bet";
  } else if (card == 7 || card == 8 || card == 9) {
    if (count >= 1) {
      return count + " Bet";
    } else {
      return count + " Hold";

    }
  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
    count--;

    if (count < 1) {
      return count + " Hold";
    } else {
      return count + " Bet";

    }
  }

}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
//console.log(cc('J'));
//cc(2); cc(3); cc(7); cc('K'); cc('A');

//* ######################################## */


//* ######################################## */
