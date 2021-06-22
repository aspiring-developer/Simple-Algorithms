//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//##################################
function truncateString(str, num) {
  let truncated = str.slice(0, num);
  if (str.length > num) {
    return truncated + "...";
  } else {
    return str;
  }
}
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//##################################

/////////////////////////////////////
// Truncating from beginning up to given length, then appending ellipses
function truncateString2(str2, num2) {
  let truncated2 = '';
  for (let i = 0; i < str2.length; i++) {
    if (str2.length > num2) {
      truncated2 = str2.slice(0, num2);
      truncated2 += "...";
      return truncated2;
    } else {
      return str2;
    }
  }
}
console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString2("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));



/////////////////////////////////////
// THIS IS NOT WHAT THE LESSON WANTED,
// BUT IT IS TO FIND CERTAIN LENGTH AND APPENDING ELLIPSES (...)
function truncateString1(str1, num1) {
  let splitted1 = str1.split(' ');
  let truncated1 = '';
  for (let i = 0; i < splitted1.length; i++) {
    if (splitted1[i].length > num1) {
      truncated1 = splitted1[i].slice(-num1);
      truncated1 += "...";
  return truncated1;
    }
    else {
      return str1;
    }
  }
}
//console.log(truncateString1("A-tisket a-tasket A green and yellow basket", 8));
/////////////////////////////////////