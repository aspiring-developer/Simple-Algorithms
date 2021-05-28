//String reversal
//function reversalFunction(str) {
//  let reversedCharacter = [];
//  for (let i = 0; i < str.length; i++) {
//    reversedCharacter += str[i];

//    console.log(reversedCharacter);
//  }
//  const reversed = str.split();
//  console.log(reversed);
//}
//reversalFunction("hello")


function reversalFunction(str) {
  const splitted = str.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  console.log(joined);
  }
reversalFunction("hello");


//************************************* */
function reversalFunction1(str1) {
  const reversed1 = str1.split("").reverse().join("");
  console.log(reversed1);
  }
reversalFunction1("Javascript");