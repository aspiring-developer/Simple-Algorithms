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
  let sliced = str.slice(str.length - target.length);
  if (target === sliced) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
//////////////////////////////////////

//////////////////////////////////////
function confirmEnding2(str2, target2) {
  return str2.slice(-target2.length) === target2
}
console.log(confirmEnding2("Bastian", "n"));
console.log(confirmEnding2("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
//////////////////////////////////////