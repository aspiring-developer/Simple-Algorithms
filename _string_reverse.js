//TODO: Reverse given string

function reverseString(str) {
  let reveredStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    reveredStr += str[i];
  }
  return reveredStr;
}
let givenString = "reverse these words";
console.log(reverseString(givenString) + " <--Final");

