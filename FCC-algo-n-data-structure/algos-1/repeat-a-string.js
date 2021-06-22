function repeatStringNumTimes(str, num) {
  let repeat = '';
  for (let i = 0; i < num; i++) {
    if (num > 0) {
      repeat += str;
    } else {
      repeat = '';
    }
  }
  return repeat;
}
console.log(repeatStringNumTimes("abc", 3));

