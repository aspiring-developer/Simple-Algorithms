// Chunky Monkey
//Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a two-dimensional array.

/////////////////////////////////////////////////

function chunkArrayInGroups(arr, size) {
  let finalArr = [];
  let newArr1 = [];
  let newArr2 = [];
for (let i = 0; i < arr.length; i++) {

  arr[i].split('');
  console.log(arr[i])
}


  //let splitted = arr.split(' ');
  //console.log(splitted)


  return finalArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2)
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/////////////////////////////////////////////
// NOT GOOD!
//function chunkArrayInGroups(arr, size) {
//  let finalArr = [];
//let newArr1 = [];
//let newArr2 = [];
//let halfOne = arr.length/size;
//console.log(halfOne);
//newArr1.push(arr[0], arr[1]);
//console.log(newArr1);
//newArr2.push(arr[2], arr[3]);
//console.log(newArr2);

//finalArr.push(newArr1, newArr2)
//console.log(finalArr);
//  return finalArr;
//}
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
