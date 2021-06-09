/*
- Given a list of bears, each with a given name and height,
- Print the name of the bear with the smallest height...
...that is greater than or equal to 10.
*/

//########### BEST WAY #####################
const bearList1 = [
  { name: "Mama Bear", height: 9 },
  { name: "Papa Bear", height: 12 },
  { name: "Dada Bear", height: 11 },
  { name: "Bro Bear", height: 8 },
  { name: "Sis Bear", height: 6 },
  { name: "Grandpa Bear", height: 10 },
  { name: "Neighbor Bear", height: 14 }
]

function findCertainBear() {
  let filteredList = bearList1.filter(function(eachBear) {
    return eachBear.height >= 10;
  });

  let sortedFromFilteredList = filteredList.sort(function (a, b) {
    return a.height - b.height;
  });

  let smallestHeightBearName = sortedFromFilteredList[0].name;
  return smallestHeightBearName;
}
console.log(findCertainBear());

//*********** ANOTHER SYNTAX (WITH TERNARY OPERATOR) ************** */
//function findCertainBear() {
//  let newList = bearList.filter(bear => bear.height >= 10);

//  let smallestSorted = newList.sort((a, b) => (a.height > b.height) ? 1 : -1);
//  let smallestHeightBearName = smallestSorted[0].name;
//  return smallestHeightBearName;
//}
//findCertainBear();
//console.log(findCertainBear());