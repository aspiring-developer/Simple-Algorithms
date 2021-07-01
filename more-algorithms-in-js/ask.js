////////////////////////////////////////////////
// FINDING DUPLICATES
function findingDuplicates(arr) {
  let observe = [];
  for (let i = 0; i < arr.length; i++) {
    if (observe[arr[i]]) {
      observe[arr[i]]++;
    }
    else {
      observe[arr[i]] = 1;
    }
  }
  return observe;
}
console.log(findingDuplicates("123345"));
console.log(findingDuplicates("abccde"));
console.log(findingDuplicates([1, 2, 3, 4, 4, 5]));
//.............................................
function countCharacter(str) {
  let charCount = [];
  for (i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  return charCount;
}
console.log(countCharacter('javascript'));
//...................................................
//function maxChar(str) {
//  str = str.split('');
//  for (let i = 0; i < str.length; i++) {
//    if (str[str[i]] > 0) {
//      str[str[i]]++;
//    } else {
//      str[str[i]] = 1;
//    }
//  }
//  return str;
//}

////////////////////////////////////////////////