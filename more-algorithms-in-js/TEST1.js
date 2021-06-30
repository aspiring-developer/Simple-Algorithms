// CHUNK ARRAY
function chunkArray(arr) {
  let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
result.push(arr[i][j]);
  }
}
console.log(result);
  return result;
}
let givenArray = [["arr1-1", "arr1-2"], ["arr2-1", "arr2-2"], ["arr3-1", "arr3-2"]];
chunkArray(givenArray)