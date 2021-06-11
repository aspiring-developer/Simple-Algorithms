var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

////////////////////////////////////////

let printNumTwo1;
for (let k = 0; k < 3; k++) {
  if (k === 2) {
    printNumTwo1 = function() {
      return k;
    };
  }
}
console.log(printNumTwo1());
//console.log(k);

////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
var numArray = [];
var j;
for (j = 0; j < 3; j++) {
  numArray.push(j);
}
console.log(numArray);
console.log(j);
///////////////////////////////////////
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0,1,2]=2,5,7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace());