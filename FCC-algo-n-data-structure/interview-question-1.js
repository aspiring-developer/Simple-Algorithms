/*
- Given a list of bears, each with a given name and height,
- Print the name of the bear with the smallest height...
...that is greater than or equal to 10.
*/


const bearList = [
  { name: "Mama Bear", height: 10 },
  { name: "Papa Bear", height: 12 },
  { name: "Dada Bear", height: 9 },
  { name: "Bro Bear", height: 8 },
  { name: "Sis Bear", height: 6 },
  { name: "Grandpa Bear", height: 13 },
  { name: "Neighbor Bear", height: 14 }
]
//console.log(bearList[1].height);

//function findCertainBear() {
//  let foundBearList = [];
//    if (bearList.height >= 10) {
//      foundBearList.push(bearList);
//      console.log(bearList)
//    }
//    return foundBearList;

//}
//console.log(findCertainBear());

//*********************************************** */
//function findCertainBear() {
//  let newList = bearList.filter(bear => bear.height >= 10);

//  let smallestSorted = newList.sort((a, b) => (a.height > b.height) ? 1 : -1);
//  let smallestHeightBearName = smallestSorted[0].name;
//  return smallestHeightBearName;
//}
//findCertainBear();
//console.log(findCertainBear());

//########### TEST #####################

function findCertainBear() {
  let newList = bearList.filter(bear => bear.height >= 10);

  let smallestSorted = newList.sort(function (a, b) {
if(a.height > b.height) {
  return 1
}
return -1
    //let smallestHeightBearName = smallestSorted[0].name;
    //return smallestHeightBearName;
  });
}
findCertainBear();
console.log(findCertainBear());