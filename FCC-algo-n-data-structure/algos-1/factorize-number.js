function factorialize(num) {
  let factorized = 1;
  if(num > 0) {
    factorized = num * factorialize(num -1);
  }
  return factorized;
}
console.log(factorialize(5));