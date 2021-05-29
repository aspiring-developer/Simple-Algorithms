// Longest word finder
function findLongestWord(str) {
  let splittedStr = str.split(' ');
  let longest = '';
  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i].length > longest.length) {
      longest = splittedStr[i];
    }
  }
  return { Longest_word: longest, longest_length: longest.length };
}
console.log(findLongestWord("Find longest word from this sentence"));
//findLongestWord("Find longest word from this sentence");