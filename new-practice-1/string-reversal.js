function reversalFunction(str) {
  const splitted = str.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  console.log(joined);
}
reversalFunction("Hello");


//************************************* */
function reversalFunction1(str1) {
  const reversed1 = str1.split("").reverse().join("");
  console.log(reversed1);
}
reversalFunction1("Javascript");

//************************************* */

function reversalFunction2(str2) {
  let reversedCharacter = '';
  for (let i = str2.length - 1; i >= 0; i--) {
    reversedCharacter += (str2[i]);
  }
  console.log(reversedCharacter);
}
reversalFunction2("React");