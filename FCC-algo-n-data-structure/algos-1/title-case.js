//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  str = str.toLowerCase();
  let splitted = str.split(' ');

  let result = [];
  let titleCased = '';
  let otherCharacters = '';
  //let final = [];
  for (let i = 0; i < splitted.length; i++) {
    titleCased = splitted[i][0].toUpperCase();
    //console.log(titleCased + " <--titleCased");
    otherCharacters = splitted[i].slice(1);
    //console.log(otherCharacters + " <--otherCharacters");

    final = result.push(titleCased + otherCharacters);
    final = result.join(' ');
  }
  console.log(final);
  return final;
}

titleCase("I'm a little tea pot");