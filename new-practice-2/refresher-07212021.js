// Use the Rest Parameter with Function Parameters

// Modify the function sum using the rest parameter in such a way that
// the function sum is able to take any number of arguments and return their sum.
const sum = (...rest) => {
  const args = [x, y, z];
  console.log(args);
  return args.reduce((a, b) => a + b, 0);
}