//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* repeated int
function repeatedFinder(num) {
  let observed = [];
  for (let i = 0; i < num.length; i++) {
    if (observed[num[i]]) {
      return num[i];
    } else {
      observed[num[i]] = num[i];
    }
  }
  return "Not found";
  //return false;
}

let arr = [1, 2, 3, 4, 4, 5, 6];
console.log(repeatedFinder(arr));
////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<