// Title Case Each word
function titleCaseEachWord(str) {
  let splittedStr = str.split(' ');
  let slicedFirstChar = [];
  let titleCased = [];
  let slicedRemainingChars = [];
  for (let i = 0; i < splittedStr.length; i++) {
    slicedFirstChar.push(splittedStr[i][0].toUpperCase());
    slicedRemainingChars.push(splittedStr[i].slice(1));

    titleCased.push(slicedFirstChar[i].concat(slicedRemainingChars[i]));

  }
console.log(titleCased)
  return titleCased;
}

titleCaseEachWord("make all words title case in this sentence.");
