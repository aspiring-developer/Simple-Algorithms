var arr = [[1, 2], [3, 4], [5, 6]];
for (var i = 0; i < arr.length; i++) {
  //console.log(arr.length)//3
  //console.log(arr[i]); //[1, 2], [3, 4], [5, 6]
  //console.log(arr[i].length) //2,2,2
  for (var j = 0; j < arr[i].length; j++) {
    //console.log(arr[i]); //[ 1, 2 ], [ 1, 2 ], [ 3, 4 ], [ 3, 4 ], [ 5, 6 ], [ 5, 6 ]
    console.log(arr[j]) // [1, 2], [3, 4],[1, 2], [3, 4],[1, 2], [3, 4]
       let result = (arr[i][j]);
    console.log(result + " Result (Multiplied)"); // 123456
  }
}
