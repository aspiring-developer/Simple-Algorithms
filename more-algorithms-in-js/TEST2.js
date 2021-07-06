////////////////////////////////////////////////////
// FINDING END INDEXED CHARACTER(S)
function findEndChar(str, target) {
  if (str.substr(-target.length) === target) {
    return "It matches!"
  }
  return "NO MATCH!";
}

console.log(findEndChar("Find the matching end character", "ter"))
////////////////////////////////////////////////////
// FINDING ANY MATCHING CHARACTER(S)
function findEndChar(str, target) {
  if (str.indexOf(target) !== -1) {
    return "It matches!"
  }
  return "NO MATCH!";
}

console.log(findEndChar("Find the matching end character", "ch"))
////////////////////////////////////////////////////



