//TODO: Reverse number array

let reverseArray = (arr) => {
  let reversedElement = [];

  for(let i = 0; i < arr.length; i++){
     reversedElement[i] = arr[arr.length - i - 1];
  }
return reversedElement;
}
console.log(reverseArray([2,4,1,5,9,8,11]) + " <--Final Result");