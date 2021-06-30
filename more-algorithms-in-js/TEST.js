////////////////////////////////////////////////
// STRING REVERSAL
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  //console.log(reversed);
  return reversed;
}
reverseString("Reverse");
////////////////////////////////////////////////

////////////////////////////////////////////////
// PALINDROME CHECK
function palindromeCheck(str) {
  str = str.toLowerCase();
  let result = true;
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    if (reversed === str) {
      result = true;
    } else {
      result = false;
    }
  }
  //console.log(result);
  return result;
}
palindromeCheck("eylle");
////////////////////////////////////////////////

////////////////////////////////////////////////
// INTEGER REVERSAL
function reverseInt(int) {
  int = int.toString();
  let reversed = '';
  for (let i = 0; i < int.length; i++) {
    reversed = int[i] + reversed;
    reversed = parseInt(reversed);
  }
  //console.log(reversed);
  return reversed;
}
reverseInt(12345);
////////////////////////////////////////////////

////////////////////////////////////////////////
// TITLE CASE
function titleCase(str) {
  str = str.split(' ');
  let firstUpper = '';
  let otherLower = '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    firstUpper = str[i][0].toUpperCase();
    otherLower = str[i].slice(1).toLowerCase();
    result += firstUpper + otherLower + ' ';
  }
  //console.log(result);
  return result;
}
titleCase("change this sentence to title case.");

////////////////////////////////////////////////

////////////////////////////////////////////////
// MAX OCCURRING CHARACTER
function maxChar(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[str[i]] > 0) {
      str[str[i]]++;
    } else {
      str[str[i]] = 1;
    }
  }
  return str;
}
//maxChar("javascript"); // result a:2 (a = 2)
//console.log(maxChar("javascript")); // result a:2 (a = 2)

////////////////////////////////////////////////

////////////////////////////////////////////////
//FIZZBUZZ CHALLENGE
function fizzBuzz(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      //console.log("FizzBuzz");
      result = "FizzBuzz";
    }
    else if (i % 3 == 0) {
      //console.log("Fizz");
      result = "Fizz";

    } else if (i % 5 == 0) {
      //console.log("Buzz");
      result = "Buzz";
    }
    else {
      //console.log(i);
    }
  }
  return result;
}
fizzBuzz(16);

////////////////////////////////////////////////
////////////////////////////////////////////////
// LONGEST WORD FINDER (IN A SENTENCE)
function longestWord(sentence) {
  sentence = sentence.split(' ')
  let longest = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > longest.length) {
      longest = sentence[i];
    }
  }
  return longest;
}
//console.log(longestWord("Find a longest character word from this sentence."));
////////////////////////////////////////////////
////////////////////////////////////////////////
// ANAGRAM CHECK
function anagramCheck(check, target) {
  check = check.toLowerCase().split('');
  target = target.toLowerCase().split('');
  let isAnagram = '';
  if (check.length !== target.length) { return false };

  for (let i = 0; i < check.length; i++) {
    if (check.indexOf(target[i]) !== -1) {
      isAnagram = true;
      //console.log(isAnagram);
    } else {
      isAnagram = false;
    }
  }
  return isAnagram;
}
//console.log(anagramCheck("SiLent", "listen")); // silent/listen
////////////////////////////////////////////////
////////////////////////////////////////////////
// LARGEST AND SMALLEST INT FINDER
function largestSmallestIntFinder(arr) {
  let largestInt = 0;
  let smallestInt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestInt) {
      largestInt = arr[i];
    }
    if (arr[i] < smallestInt) {
      smallestInt = arr[i];
    }
  }
  //console.log(largestInt);
  //console.log(smallestInt);
}
largestSmallestIntFinder([1, 32, 456, 76, 98, -2, 1000, -10000]);
//console.log(largestSmallestIntFinder([1, 32, 456, 76, 98, -2, 1000]));
////////////////////////////////////////////////
////////////////////////////////////////////////
// RECURSIVE SUM
function recursiveSum(num) {
  let sum = 1;
  if (num > 0) {
    sum = num + recursiveSum(num - 1);
    return sum;
  } else {
    return null;
  }
}
//console.log(recursiveSum(10));
////////////////////////////////////////////////
////////////////////////////////////////////////
// NEXT POSITIVE NUMBER FINDER
function nextPositiveNum(arr) {
  let increment = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result == 0) { increment++ };
    if (arr.indexOf(increment) === -1) {
      result = increment;
    }
  }
  return result;
}
//console.log(nextPositiveNum([0, 1, -2, 2, 3, 4, 6, 7, 8,]));

////////////////////////////////////////////////
////////////////////////////////////////////////
// VOWELS AND CONSONANTS FINDER
function vowelsAndConsonants(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t",
    "v", "w", "x", "y", "z"]
  let foundVowels = [];
  let foundConsonants = [];
  str = str.split('');
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(vowels[i]) !== -1) {
      foundVowels.push(vowels[i]);
    }
    if (str.indexOf(consonants[i]) !== -1) {
      foundConsonants.push(consonants[i]);
    }
  }
  return { foundVowels, foundConsonants };
}
//console.log(vowelsAndConsonants("vowels and consonants"));
////////////////////////////////////////////////
////////////////////////////////////////////////
// ARRAY REVERSAL
function reverseArray(arr) {
let result = [];
for (let i = 0; i < arr.length; i++) {
  result = arr[i] + result;

}

  return result;
}
let givenArray = [["arr1-1", "arr1-2"], ["arr2-1", "arr2-2"], ["arr3-1", "arr3-2"]];
console.log(reverseArray(givenArray));
////////////////////////////////////////////////
////////////////////////////////////////////////
// WORD REVERSAL
////////////////////////////////////////////////

////////////////////////////////////////////////
// FIBONACCI SEQUENCE
////////////////////////////////////////////////
////////////////////////////////////////////////
// FINDING DUPLICATES
////////////////////////////////////////////////
////////////////////////////////////////////////
// END INDEX CONFIRM
////////////////////////////////////////////////
////////////////////////////////////////////////

