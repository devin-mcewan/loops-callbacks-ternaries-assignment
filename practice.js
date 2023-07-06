//////////////////PROBLEM 1////////////////////

//Create a function called capitalizer that takes in an array of strings and returns a new array (does not modify original array) with all strings capitalized.
const sentenceArr = ["hello", "how", "are", "you"];

// Code Here
function capitalizer(strArr) {
  let capitalArr = [];
  if(strArr === '') {
    return capitalArr;
  } else {
    for (let i = 0; i < strArr.length; i++) {
      capitalArr.push(strArr[i].toUpperCase());
    }
    return capitalArr;
  }
}
console.log(capitalizer(sentenceArr))

//////////////////PROBLEM 2////////////////////
// Create a function that loops over an array and returs a new array with every other value. Name the function everyOther
const secretMessage = [
  "dont",
  "always",
  "tell",
  "never",
  "anyone",
  "forget",
  "about",
  "to",
  "this",
  "remember",
  "array",
  "always",
];

//Code here

function everyOther(arr) {
  let newSecretMessage = [];
  if(arr === '') {
    return newSecretMessage
  } else {
    for (i = 0; i < arr.length; i++) {
      i % 2 ? 0 : newSecretMessage.push(arr[i]);
    }
    return newSecretMessage;
  }
  
}
console.log(everyOther(secretMessage));

//////////////////PROBLEM 3////////////////////
//Create a function that loops over an array of objects and returns a new array of the value of the `name` key. Name the function nameExtractor.
const coolGuys = [
  { name: "Bob Ross" },
  { name: "Steve Irwin" },
  { name: "Mr. Rogers" },
];

//Code here

function nameExtractor(objArr) {
  let extractedNames = [];
  if(objArr === '') {
    return extractedNames;
  } else {
    for (i = 0; i < objArr.length; i++) {
      if(!objArr[i].name) {
        return extractedNames;
      }
      extractedNames.push(objArr[i].name);
    }
    return extractedNames;
  }
}

console.log(nameExtractor(coolGuys));

//////////////////PROBLEM 4////////////////////

//This while loop is broken. Fix it so that it runs until i is no longer less than 10.

//Code here

function brokenWhileLoop(i) {
  while (i < 10) {
    i = i + 1;
  }
  return i;
}

console.log(brokenWhileLoop(0));
brokenWhileLoop(0);

//////////////////PROBLEM 5////////////////////
//Create a function called rePete that takes in a string and a number and returns a string that is the passed in string repeated that n times.

//Code here
function rePete(str, num) {
  let newString = "";
  for (i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

console.log(rePete("devin", 2));

//////////////////PROBLEM 6////////////////////

//rewrite the function below to use a ternary instead of an if/else block

//Code here
function isEven(num) {
  console.log(num);
  return num % 2 === 0 ? true : false;
}

console.log(isEven(1));
console.log(isEven(2));

//////////////////PROBLEM 7////////////////////

//rewrite the function below to use a single ternary instead of a nested one

//Code Here
// function nestedTernary(num) {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }

function nestedTernary(num) {
  if (num === 0) {
    return "zero";
  } else {
    return num > 0 ? "positive" : "negative";
  }
}

console.log(nestedTernary(-1));
console.log(nestedTernary(0));
console.log(nestedTernary(1));
