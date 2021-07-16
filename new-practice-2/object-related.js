///////////////////////////////////////
// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["name"] = "Happy Coder";
//console.log(myDog.name);
// Only change code below this line
///////////////////////////////////////
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
//let value = val;
result = lookup[val];
  // Only change code above this line
  return result;
}
//console.log(phoneticLookup("delta"));
phoneticLookup("delta");
/////////////////////////////////////////
// TESTING OBJECTS FOR PROPERTIES
// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
  return obj[checkProp];

  } else {
    return "Not Found";
  }
  // Only change code above this line
}
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")); // should return the string pony.
/////////////////////////////////////////
// Manipulating Complex Objects
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
  },
  {
    "artist": "Narayan Gopal",
    "title": "Singer",
    "release_year": 1985,
    "formats": [
      "CD",
      "CA",
      "LP"
    ],
    "gold": true
  }
];
//console.log(myMusic[0].formats[0]);
//console.log(myMusic[1].gold);


////////////////////////////////////////
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
//var gloveBoxContents = undefined;
var gloveBoxContents = myStorage.car.inside["glove box"];
//console.log(gloveBoxContents);
/////////////////////////////////////////
// Accessing Nested Arrays
//Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
//console.log(secondTree);
//////////////////////////////////////////
// Record Collection
// Setup
/*
    Your function must always return the entire record collection object.
    If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
    If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    If value is an empty string, delete the given prop property from the album.
 */
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop!=recordCollection.tracks && value!="") {
    prop = value;
  } else if(prop==recordCollection.tracks && !recordCollection.hasOwnProperty(tracks)) {
    let createArr = [];
    createArr.push(recordCollection.tracks);
  } else if(prop==recordCollection.tracks && value!="") {
    recordCollection.tracks.push(recordCollection.tracks)
  } else if(value=="") {
    delete prop;
  }
  return records;
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////