// LONGEST WORD(S)
function longestWord(str) {
  let result = [];
  str = str.split(' ').sort(function (a, b) {
    return b.length - a.length
  })
  result = str[0];
  let multipleFound = [];
  let singleFound = '';
  str.filter(function (word) {
    if (str[0].length === word.length) {
      multipleFound.push(word);
      console.log(word);
    } else if (str[0].length === 1) {
      singleFound = word;
      console.log(singleFound);
    }
  })
  return { multipleFound, singleFound };
}
console.log(longestWord("Find longest word in this sentence eighteen"));