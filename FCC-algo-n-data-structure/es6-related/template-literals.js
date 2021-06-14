const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(function(eachItem) {
    return `<li class="text-warning">${eachItem}</li>`
  })
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)