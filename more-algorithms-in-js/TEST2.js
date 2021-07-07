////////////////////////////////////////////////////
// FINDING END INDEXED CHARACTER(S)
function findEndChar(str, target) {
  if (str.substr(0) === target) {
    return "It matches!"
  }
  return "NO MATCH!";
}

//console.log(findEndChar("Find the matching end character", "ind"));
////////////////////////////////////////////////////
// FINDING ANY MATCHING CHARACTER(S)
function findEndChar(str, target) {
  if (str.indexOf(target) !== -1) {
    return "It matches!"
  }
  return "NO MATCH!";
}

//console.log(findEndChar("Find the matching end character", "ch"));
////////////////////////////////////////////////////
// FINDING MISSING NUMBER
function findMissingNum(arr) {
  let result = 0;
  let increment = 0;
  while (result === 0) {
    increment++;
    if (arr.indexOf(increment) === -1) {
      result = increment;
    }
  }

  return result;
}
//console.log(findMissingNum([1,3,2,5,6,4]))
////////////////////////////////////////////////////
// REPEAT A STRING
function repeatString(str, num) {
  let result = '';
  if (num <= 0) return "Num is 0 or less!";
  for (let i = 0; i < num; i++) {
    result += str + " ";
  }
  return result;
}
//console.log(repeatString("Repeat", 3));

////////////////////////////////////////////////////
// TRUNCATE A STRING
function truncateString(str, num) {
  let result = '';
  if (str.length <= 3) {
    result = str;
  }
  if (str.length > num) {
    result = str.slice(0, num) + "...";
  }
  return result;
}
//console.log(truncateString("A-tisket, a-tasket, green and yellow basket", 8));

////////////////////////////////////////////////////
// SPLIT ARRAY INTO TWO
function splitArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.splice(0, size));
    //arr = arr.slice(size); // If using slice, need this. If using splice, no need!
  }
  return result;
}
console.log(splitArray(['a', 'b', 'c', 'd'], 2))
////////////////////////////////////////////////////


////////////////////////////////////////////////////




