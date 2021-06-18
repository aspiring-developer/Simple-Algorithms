// Reverse a String

function reverseString(str) {
  let splitted = str.split('');
  let reversed = splitted.reverse().join('');
  return reversed;
}
//console.log(reverseString("hello"));

//.....................................
// Another Way of Reversing a String
function reverseString1(str1) {
  let splitted1 = str1.split('');
  let reversed1 = [];
  let joined = '';
  for (let i = splitted1.length - 1; i >= 0; i--) {
    reversed1.push(splitted1[i]);
    joined = reversed1.join('')
  }
  return joined;
}
console.log(reverseString1("papa"));