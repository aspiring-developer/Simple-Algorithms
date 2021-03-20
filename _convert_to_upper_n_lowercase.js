//TODO: Convert vowels to lowercase and consonants to Uppercase
/*
- find vowels and consonants and separate in different variables
- convert them accordingly
*/

function changeTextCase(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strToArr = str.split('');
  console.log(strToArr + " after split");
  let foundVowels = [];
  let foundConsonants = [];

  for (let i = 0; i < strToArr.length; i++) {
        if (vowels.indexOf(strToArr[i]) === -1) {
        foundConsonants.push(strToArr[i])
      }
      if (vowels.indexOf(strToArr[i]) !== -1) {
        foundVowels.push(strToArr[i])
      }

  }
  console.log(foundVowels + " Found Vowels")
  console.log(foundConsonants + " Found Const")
  return foundConsonants;
  return foundVowels;
}
let givenString = "find vowels and consonants";
console.table(changeTextCase(givenString));
//changeTextCase(givenString);
