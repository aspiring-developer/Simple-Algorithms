function countSubArrays() {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    for (let k = i; k >= 0; k--) {
      //count+=i;  // result 40
      count++;  // result 15

      console.log(k + " k after sum");
      console.log(" " + " " + "i after count--> " + i)
    }
    console.log('..............\n')
  }
  console.log(count)
  return count;
}
countSubArrays();


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let fib = [0, 1];
for (let i = fib.length; i < 5; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<