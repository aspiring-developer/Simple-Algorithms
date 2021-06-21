// FIND IF EXIST OR NOT
// ONLY CHECKING IF CHARACTER(S) EXIST OR NOT
// SEE BELOW FOR IF EXIST AT THE END OR NOT
//function confirmEnding(str, target) {
//  if (str.indexOf(target) !== -1) {
//    return true;
//  } else {
//    return false;
//  }
//}
//console.log(confirmEnding("Bastian", "n"));

//////////////////////////////////////

function confirmEnding(str, target) {
  if (target === str.slice(str.length - target.length)) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));


//////////////////////////////////////
// if(str.substring(target) !== -1)

//////////////////////////////////////

function confirmEnding2(str2, target2) {
  return str2.slice(-target2.length) === target2
}

console.log(confirmEnding2("Bastian", "an"));
console.log(confirmEnding2("Walking on water and developing software from a specification are easy if both are frozen", "specification"));


//////////////////////////////////////