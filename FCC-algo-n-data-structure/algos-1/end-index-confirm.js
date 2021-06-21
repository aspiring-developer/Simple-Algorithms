// FIND IF EXIST OR NOT
// ONLY CHECKING IF CHARACTER(S) EXIST OR NOT
// SEE BELOW FOR IF EXIST AT THE END OR NOT
function confirmEnding(str, target) {
  if (str.indexOf(target) !== -1) {
    return true;
  } else {
    return false;
  }
}
//console.log(confirmEnding("Bastian", "n"));

//////////////////////////////////////

function confirmEnding(str, target) {
  let subStr = str.substring(str.length-1, str.indexOf(target));
  if(str.indexOf(subStr) !== -1) {
    return true;
  } else {
  return false;
  }
}

console.log(confirmEnding("Bastian", "on"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));


//////////////////////////////////////