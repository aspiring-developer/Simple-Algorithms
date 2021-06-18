//Find the Longest Word in a String
function findLongestWordLength(str) {
  let splitted = str.split(' ');
  let longest = '';
  for (let i = 0; i < splitted.length; i++) {
    //console.log(splitted[i].length)
    if (splitted[i].length > longest.length) {
      longest = ((splitted[i]));
    }
  }
  console.log(longest.length);
  return longest.length;
}
//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
findLongestWordLength("The quick brown fox jumped over the lazy dog");