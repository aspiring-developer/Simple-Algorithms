////////////////////////////////////////////////
// FINDING DUPLICATES
function findingDuplicates(arr) {
  let observe = new Array();
  //let observe = {};
  console.log(typeof(observe) + " <--typeof");
  for (let i = 0; i < arr.length; i++) {
    if (observe[arr[i]]) {
      //console.log(observe[arr[i]] + " <--observe[arr[i]]")
      observe[arr[i]]++;
    }
    else {
      observe[arr[i]] = 1;
    }

  }
  //observe.shift();
  //console.log(observe[0] + " <--")
  return observe;
}
console.log(findingDuplicates("abccdde"));
console.log(findingDuplicates("143867523"));
//console.log(findingDuplicates("977153"));
//console.log(findingDuplicates([1, 2, 3, 4, 4, 5]));
//.............................................
for (let i = 0; i < 10; i++) {
  let random = Math.floor(Math.random(10) * 10);
console.log(`%c${random}`, "font-size: 3rem; color: red");
}








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
//console.log(countCharacter('javascript'));
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