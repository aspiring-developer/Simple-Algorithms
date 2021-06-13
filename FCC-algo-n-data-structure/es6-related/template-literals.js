const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.map(function(eachItem) {
    failureItems.push(eachItem);
    console.log(failureItems)
    return `
    <li class="text-warning">${failureItems}</li>
    `
  });
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);