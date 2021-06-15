// JS PROMISE
//A promise has three states: pending, fulfilled, and rejected.





///////////////////////////////////////////////////////////
//const myPromise = new Promise((resolve, reject) => {
//  //console.log("ES6 arrow function!");
//})
////console.log(myPromise);

///////////////////////////////////////
const makeServerRequest = new Promise(function (resolve, reject) {
  if (2 + 2 == 3) {
    resolve("The promise was fulfilled!")
  }
  reject("The promise was rejected!")

})
console.log(makeServerRequest);