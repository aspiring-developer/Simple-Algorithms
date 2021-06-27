//////////////////////////////////////////////////
function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let sentence = sen.split(' ');
  //console.log(sentence)
  let result = '';
  for (let i = 0; i < sentence.length; i++) {
    let longest = '';
    //console.log(sentence[i].length);
    if (sentence[i].length > longest.length) {
      result = sentence[sentence[i]];
    }
  }
  //console.log(result);
  return result;
}
longestWord('Hi, my name is Michael Jackson');
console.log(longestWord('Hi, my name is Michael Jackson'));




//////////////////////////////////////////////////

//// CHALLENGE 3: REVERSE AN INTEGER
//// Return an integer in reverse
//// ex. reverseInt(521) === 125

//function reverseInt(int) {
//  let convertedToStr = int.toString();
//  let reversedInt = '';
//  for (let i = 0; i < convertedToStr.length; i++) {
//    //reversedInt = reversedInt + convertedToStr[i]; // result: 12345
//    reversedInt = convertedToStr[i] + reversedInt; // result: 543210
//    reversedInt = parseInt(reversedInt);
//  }
//  return reversedInt;
//}
//console.log(reverseInt(12345));
