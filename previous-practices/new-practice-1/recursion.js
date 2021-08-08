// Recursion
function recursion(num) {
  let sum = 1;
  sum = recursion(num+(num - 1));

  console.log(num);
  console.log(sum);
}

recursion(5)