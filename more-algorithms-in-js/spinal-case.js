// Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  //str = str.toLowerCase();
  str = str.split(' ').join(' ');
  str = str.replace('_', '-');
  str = str.replace(' ', '-');
  //str = str.replace(str.toUpperCase(), str.toLowerCase());
  //for (let i = 0; i < str.length; i++) {
  //  if (str[i] === str[i].toUpperCase()) {
  //    str[i].replace(str[i], '.....');
  //  }
  //  console.log(str[i]);
  //}
  console.log(str);
  return str;
}
//console.log(spinalCase('thisIs Spinal_Tap'));
spinalCase('This Is Spinal_Tap');
