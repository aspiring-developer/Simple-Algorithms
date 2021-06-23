//Falsy Bouncer
//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//Hint: Try converting each value to a Boolean.

///////////////////////////////////////////////
function bouncer(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let converted = Boolean(arr[i]);
    if (converted === true) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}
bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""])
///////////////////////////////////////////////
