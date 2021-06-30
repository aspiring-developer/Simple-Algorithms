function maxFinder(arr) {
  let max = -100000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  console.log(max);
  return max;
  //document.getElementById("maxResultArea").innerHTML = ` <h3>The Max number in the array is: <span style="color: red"> ${max} </span> <br /> `
  //
}


const givenArr = [23, 1, 12, 5, 7, 3, 4, 99, 101];
console.log(maxFinder(givenArr));