//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like the and of.

/////////////////////////////////////////////////////////
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let allLower = str.toLowerCase();
  //console.log(allLower);
  let splitted = allLower.split(" ");
  //console.log(splitted);

  let convertedArray = [];
  let result = '';

  for (let i = 0; i < splitted.length; i++) {
    let firstUpper = splitted[i][0].toUpperCase();
    //console.log(firstUpper);

    let otherChar = splitted[i].slice(1);
    //console.log(otherChar);

    convertedArray.push(firstUpper + otherChar);

    result = convertedArray.join(' ');

  }
  console.log(result);
  return result;
}

titleCase("I'm a little tea pot");

////////////////////////////////////////////////////////
//**** ANOTHER WAY */
//function titleCase(str) {
//  str = str.toLowerCase();
//  let splitted = str.split(' ');

//  let result = [];
//  let titleCased = '';
//  let otherCharacters = '';
//  let final = [];
//  for (let i = 0; i < splitted.length; i++) {
//    titleCased = splitted[i][0].toUpperCase();
//    //console.log(titleCased + " <--titleCased");
//    otherCharacters = splitted[i].slice(1);
//    //console.log(otherCharacters + " <--otherCharacters");

//    final = result.push(titleCased + otherCharacters);
//    final = result.join(' ');
//  }
//  console.log(final);
//  return final;
//}

//titleCase("I'm a little tea pot");