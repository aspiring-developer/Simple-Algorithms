// JS PROMISE
//A promise has three states: pending, fulfilled, and rejected.





///////////////////////////////////////////////////////////
//const myPromise = new Promise((resolve, reject) => {
//  //console.log("ES6 arrow function!");
//})
////console.log(myPromise);

///////////////////////////////////////
//const makeServerRequest1 = new Promise(function (resolve, reject) {
//  if (2 + 2 == 3) {
//    resolve("The promise was fulfilled!")
//  }
//  reject("The promise was rejected!")

//})
//console.log(makeServerRequest1);

//////////////////////////////////////////

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
//console.log(makeServerRequest)

//////////////////////////////////////////////////////////////
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer2 = true;

  if(responseFromServer2) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest2.then(result=>{
  console.log(result);
});

//console.log(makeServerRequest2)

//////////////////////////////////////////////////
const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer3 = false;

  if(responseFromServer3) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest3.then(result => {
  console.log(result);
}).catch(error=>{
  console.log(error, "ERROR!!!!!")
});