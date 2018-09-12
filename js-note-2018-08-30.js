/*Basic JavaScript: Find the Length of a String*/

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

/*Basic JavaScript: Use Bracket Notation to Find the First Character in a String*/

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

/*Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String*/

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

/*Basic JavaScript: Use Bracket Notation to Find the Last Character in a String*/

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

/*Basic JavaScript: Golf Code*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

/*Basic JavaScript: Selecting from Many Options with Switch Statements*/
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }


    // Only change code above this line  
    return answer;
}

// Change this value to test
caseInSwitch(1);

/*Basic JavaScript: Adding a Default Option in Switch Statements*/
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    // Only change code above this line  
    return answer;
}

// Change this value to test
switchOfStuff(1);

/*Basic JavaScript: Return Early Pattern for Functions*/
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }

    // The Math.pow() function returns the base to the exponent power, that is, baseexponent.
    //The Math.sqrt() function returns the square root of a number

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);

/*Basic JavaScript: Blackjack Counting Cards*/
var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count <= 0) {
        return `${count} Hold`;
    } else {
        return `${count} Bet`
    }
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

/*Basic JavaScript: Accessing Object Properties with Variables*/

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16; // Change this Line
var player = testObj[playerNumber]; // Change this Line

/*Basic JavaScript: Delete Properties from a JavaScript Object*/

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line.
delete myDog["tails"];

/*Basic JavaScript: Using Objects for Lookups*/

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    /*
    switch(val) {
      case "alpha": 
        result = "Adams";
        break;
      case "bravo": 
        result = "Boston";
        break;
      case "charlie": 
        result = "Chicago";
        break;
      case "delta": 
        result = "Denver";
        break;
      case "echo": 
        result = "Easy";
        break;
      case "foxtrot": 
        result = "Frank";
    }
    */
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");

/*Basic JavaScript: Testing Objects for Properties*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Conditional (ternary) Operator
  return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}

// Test your code by modifying these values
checkObj("gift");

/*Basic JavaScript: Accessing Nested Objects*/

// Setup
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

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

/*Basic JavaScript: Accessing Nested Arrays*/

// Setup
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

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

/*Basic JavaScript: Record Collection*/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  let obj = collection[id];
  if(prop === "tracks" && value !== "") {
    if(obj[prop]) {
      obj[prop].push(value);
    }else{
      obj[prop] = [value];
    }
  }else if(value !== "") {
    obj[prop] = value;
  }else{
    delete obj[prop];
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");